import {

Injectable

} from '@nestjs/common';

import {

InjectRepository

} from '@nestjs/typeorm';

import {

Repository,
Between

} from 'typeorm';

import {

Transaction

} from '../transactions/entities/transaction.entity';

import {

Expense

} from '../expenses/entities/expense.entity';

@Injectable()

export class DashboardService{

constructor(

@InjectRepository(

Transaction

)

private readonly transactionRepository:

Repository<Transaction>,

@InjectRepository(

Expense

)

private readonly expenseRepository:

Repository<Expense>

){}

async getDashboard(){

const now=new Date();

const startWeek=new Date();

startWeek.setDate(

now.getDate()-7

);

const startMonth=

new Date(

now.getFullYear(),

now.getMonth(),

1

);

const weekly=

await this.transactionRepository.find({

where:{

created_at:Between(

startWeek,

now

)

}

});

const monthly=

await this.transactionRepository.find({

where:{

created_at:Between(

startMonth,

now

)

}

});

const expenses=

await this.expenseRepository.find();

const weeklyProfit=

weekly.reduce(

(

total,

item

)=>

total+

Number(

item.profit

),

0

);

const monthlyProfit=

monthly.reduce(

(

total,

item

)=>

total+

Number(

item.profit

),

0

);

const totalExpenses=

expenses.reduce(

(

total,

item

)=>

total+

Number(

item.amount

),

0

);

const totalServices=

monthly.length;

return{

weekly_profit:

weeklyProfit.toFixed(

2

),

monthly_profit:

monthlyProfit.toFixed(

2

),

services_completed:

totalServices,

operational_expenses:

totalExpenses.toFixed(

2

),

net_profit:(

monthlyProfit-

totalExpenses

).toFixed(

2

)

};

}

}