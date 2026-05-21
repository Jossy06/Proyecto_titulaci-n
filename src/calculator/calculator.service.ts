import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Expense } from '../expenses/entities/expense.entity';

import { BeautyService } from '../services/entities/service.entity';

import { ServiceMaterial } from '../service-materials/entities/service-material.entity';

@Injectable()
export class CalculatorService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,

    @InjectRepository(BeautyService)
    private readonly serviceRepository: Repository<BeautyService>,

    @InjectRepository(ServiceMaterial)
    private readonly serviceMaterialRepository: Repository<ServiceMaterial>,
  ) {}

  async calculate(body: any) {
    if (
      !body.service_id ||
      body.desired_profit === undefined
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

    const serviceMaterials = await this.serviceMaterialRepository.find({
      where: {
        service_id: body.service_id,
      },
      relations: {
        material: true,
      },
    });

    const materialCost = serviceMaterials.reduce(
      (total, item) =>
        total +
        Number(item.material.unit_price) *
        Number(item.quantity),
      0,
    );

    const expenses = await this.expenseRepository.find();

    const totalExpenses = expenses.reduce(
      (total, expense) =>
        total + Number(expense.amount),
      0,
    );

    const operationalCost = totalExpenses / 100;

    const laborCost = service.duration_minutes * 0.15;

    const desiredProfit = Number(body.desired_profit);

    const finalPrice =
      materialCost +
      laborCost +
      operationalCost +
      desiredProfit;

    return {
      service: service.name,
      materials: materialCost.toFixed(2),
      labor: laborCost.toFixed(2),
      operational: operationalCost.toFixed(2),
      profit: desiredProfit.toFixed(2),
      suggested_price: finalPrice.toFixed(2),
    };
  }
}