import {

 Module

} from '@nestjs/common';

import {

 TypeOrmModule

} from '@nestjs/typeorm';

import {

 CalculatorController

} from './calculator.controller';

import {

 CalculatorService

} from './calculator.service';

import {

 Expense

} from '../expenses/entities/expense.entity';

import {

 BeautyService

} from '../services/entities/service.entity';

@Module({

 imports:[

 TypeOrmModule.forFeature([

  Expense,

  BeautyService

 ])

 ],

 controllers:[

  CalculatorController

 ],

 providers:[

  CalculatorService

 ]

})

export class CalculatorModule{}