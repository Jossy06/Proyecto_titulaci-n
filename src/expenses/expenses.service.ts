import {

 Injectable,

 BadRequestException

} from '@nestjs/common';

import {

 InjectRepository

} from '@nestjs/typeorm';

import {

 Repository

} from 'typeorm';

import {

 Expense

} from './entities/expense.entity';

@Injectable()

export class ExpensesService{

 constructor(

 @InjectRepository(

 Expense

 )

 private expenseRepository:

 Repository<Expense>

 ){}

 async create(

 body:any

 ){

  if(

   !body.name ||

   !body.amount ||

   !body.month

  ){

   throw new BadRequestException(

    'Faltan datos'

   );

  }

  const expense=

  this.expenseRepository.create({

   name:body.name,

   amount:body.amount,

   month:body.month

  });

  await this.expenseRepository.save(

   expense

  );

  return{

   message:'Gasto creado',

   expense

  };

 }

 async findAll(){

  return await

  this.expenseRepository.find({

   order:{

    created_at:'DESC'

   }

  });

 }

}
