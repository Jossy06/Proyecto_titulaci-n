import {

 Entity,

 PrimaryGeneratedColumn,

 Column,

 CreateDateColumn,

 UpdateDateColumn

} from 'typeorm';

@Entity('services')

export class BeautyService{

 @PrimaryGeneratedColumn('uuid')

 id!:string;

 @Column()

 name!:string;

 @Column()

 category!:string;

 @Column('decimal',{

  precision:10,

  scale:2

 })

 base_price!:number;

 @Column()

 duration_minutes!:number;

 @CreateDateColumn()

 created_at!:Date;

 @UpdateDateColumn()

 updated_at!:Date;

}