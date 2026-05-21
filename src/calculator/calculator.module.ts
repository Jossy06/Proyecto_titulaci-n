import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

import { Expense } from '../expenses/entities/expense.entity';
import { BeautyService } from '../services/entities/service.entity';
import { ServiceMaterial } from '../service-materials/entities/service-material.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Expense,
      BeautyService,
      ServiceMaterial,
    ]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}