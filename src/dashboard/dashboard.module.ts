import {

Module

} from '@nestjs/common';

import {

TypeOrmModule

} from '@nestjs/typeorm';

import {

DashboardController

} from './dashboard.controller';

import {

DashboardService

} from './dashboard.service';

import {

Transaction

} from '../transactions/entities/transaction.entity';

import {

Expense

} from '../expenses/entities/expense.entity';

@Module({

imports:[

TypeOrmModule.forFeature([

Transaction,

Expense

])

],

controllers:[

DashboardController

],

providers:[

DashboardService

]

})

export class DashboardModule{}