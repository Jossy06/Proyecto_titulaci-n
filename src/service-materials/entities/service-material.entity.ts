import {

Entity,
PrimaryGeneratedColumn,
Column,
ManyToOne,
JoinColumn

} from 'typeorm';

import {

BeautyService

} from '../../services/entities/service.entity';

import {

Material

} from '../../materials/entities/material.entity';

@Entity('service_materials')

export class ServiceMaterial{

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

@ManyToOne(

()=>Material

)

@JoinColumn({

name:'material_id'

})

material!:Material;

@Column('uuid')

material_id!:string;

@Column(

'decimal',

{

precision:10,
scale:2

}

)

quantity!:number;

}