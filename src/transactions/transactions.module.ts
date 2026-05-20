import {

Module

} from '@nestjs/common';

import {

TypeOrmModule

} from '@nestjs/typeorm';

import {

Transaction

} from './entities/transaction.entity';

import {

BeautyService

} from '../services/entities/service.entity';

import {

TransactionsController

} from './transactions.controller';

import {

TransactionsService

} from './transactions.service';

@Module({

imports:[

TypeOrmModule.forFeature([

Transaction,

BeautyService

])

],

controllers:[

TransactionsController

],

providers:[

TransactionsService

]

})

export class TransactionsModule{}