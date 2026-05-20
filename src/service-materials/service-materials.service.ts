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

ServiceMaterial

} from './entities/service-material.entity';

@Injectable()

export class ServiceMaterialsService{

constructor(

@InjectRepository(

ServiceMaterial

)

private readonly repository:

Repository<ServiceMaterial>

){}

async create(

body:any

){

if(

!body.service_id||

!body.material_id||

!body.quantity

){

throw new BadRequestException(

'Faltan datos'

);

}

const relation=

this.repository.create({

service_id:

body.service_id,

material_id:

body.material_id,

quantity:

body.quantity

});

await this.repository.save(

relation

);

return{

message:

'Material agregado',

relation

};

}

async findAll(){

return await this.repository.find({

relations:{

service:true,
material:true

}

});

}

}