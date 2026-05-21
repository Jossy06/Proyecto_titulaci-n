import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Transaction } from './entities/transaction.entity';

import { BeautyService } from '../services/entities/service.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,

    @InjectRepository(BeautyService)
    private readonly serviceRepository: Repository<BeautyService>,
  ) {}

  async create(body: any) {
    if (
      !body.service_id ||
      body.charged_price === undefined ||
      body.real_cost === undefined
    ) {
      throw new BadRequestException('Faltan datos');
    }

    const service = await this.serviceRepository.findOne({
      where: {
        id: body.service_id,
      },
    });

    if (!service) {
      throw new BadRequestException('Servicio no encontrado');
    }

    const chargedPrice = Number(body.charged_price);
    const realCost = Number(body.real_cost);

    const profit = Number(
      (chargedPrice - realCost).toFixed(2),
    );

    const transaction = this.transactionRepository.create({
      service_id: body.service_id,
      charged_price: chargedPrice,
      real_cost: realCost,
      profit,
    });

    await this.transactionRepository.save(transaction);

    return {
      message: 'Venta guardada',
      transaction,
    };
  }

  async findAll() {
    return await this.transactionRepository.find({
      relations: {
        service: true,
      },
      order: {
        created_at: 'DESC',
      },
    });
  }
}