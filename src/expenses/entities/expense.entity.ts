import {

Entity,
PrimaryGeneratedColumn,
Column,
CreateDateColumn,
UpdateDateColumn

} from 'typeorm';

@Entity('expenses')

export class Expense{

 @PrimaryGeneratedColumn('uuid')

 id!:string;

 @Column()

 name!:string;

 @Column('decimal',{

 precision:10,

 scale:2

 })

 amount!:number;

 @Column()

 month!:string;

 @CreateDateColumn()

 created_at!:Date;

 @UpdateDateColumn()

 updated_at!:Date;

}