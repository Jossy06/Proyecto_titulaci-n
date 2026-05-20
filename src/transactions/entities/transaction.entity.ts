import {

Entity,
PrimaryGeneratedColumn,
Column,
CreateDateColumn,
ManyToOne,
JoinColumn

} from 'typeorm';

import {

BeautyService

} from '../../services/entities/service.entity';

@Entity('transactions')

export class Transaction{

@PrimaryGeneratedColumn('uuid')

id!:string;

@ManyToOne(

()=>BeautyService

)

@JoinColumn({

name:'service_id'

})

service!:BeautyService;

@Column('uuid')

service_id!:string;

@Column(

'decimal',

{

precision:10,

scale:2

}

)

charged_price!:number;

@Column(

'decimal',

{

precision:10,

scale:2

}

)

real_cost!:number;

@Column(

'decimal',

{

precision:10,

scale:2

}

)

profit!:number;

@CreateDateColumn()

created_at!:Date;

}