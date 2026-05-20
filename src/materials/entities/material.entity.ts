import {

Entity,
PrimaryGeneratedColumn,
Column,
CreateDateColumn,
UpdateDateColumn

} from 'typeorm';

@Entity('materials')

export class Material{

@PrimaryGeneratedColumn('uuid')

id!:string;

@Column()

name!:string;

@Column(

'decimal',

{

precision:10,

scale:2

}

)

unit_price!:number;

@Column()

stock!:number;

@Column()

unit!:string;

@CreateDateColumn()

created_at!:Date;

@UpdateDateColumn()

updated_at!:Date;

}