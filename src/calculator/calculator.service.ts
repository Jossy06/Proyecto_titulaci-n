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

} from '../expenses/entities/expense.entity';

import {

 BeautyService

} from '../services/entities/service.entity';

@Injectable()

export class CalculatorService{

 constructor(

  @InjectRepository(

   Expense

  )

  private readonly expenseRepository:

  Repository<Expense>,

  @InjectRepository(

   BeautyService

  )

  private readonly serviceRepository:

  Repository<BeautyService>

 ){}

 async calculate(

  body:any

 ){

  if(

   !body.service_id ||

   body.material_cost===undefined ||

   body.desired_profit===undefined

  ){

   throw new BadRequestException(

    'Faltan datos'

   );

  }

  const service=

  await this.serviceRepository.findOne({

   where:{

    id:body.service_id

   }

  });

  if(

   !service

  ){

   throw new BadRequestException(

    'Servicio no encontrado'

   );

  }

  const expenses=

  await this.expenseRepository.find();

  const totalExpenses=

  expenses.reduce(

   (

    total,

    expense

   )=>

   total+

   Number(

    expense.amount

   ),

   0

  );

  const operationalCost=

  totalExpenses/100;

  const laborCost=

  service.duration_minutes*

  0.15;

  const materialCost=

  Number(

   body.material_cost

  );

  const desiredProfit=

  Number(

   body.desired_profit

  );

  const finalPrice=

  materialCost+

  laborCost+

  operationalCost+

  desiredProfit;

  return{

   service:

   service.name,

   materials:

   materialCost,

   labor:

   Number(

    laborCost

   ).toFixed(2),

   operational:

   Number(

    operationalCost

   ).toFixed(2),

   profit:

   desiredProfit,

   suggested_price:

   Number(

    finalPrice

   ).toFixed(2)

  };

 }

}