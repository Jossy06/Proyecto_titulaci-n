import {

Injectable

} from '@nestjs/common';

import {

InjectRepository

} from '@nestjs/typeorm';

import {

Repository

} from 'typeorm';

import {

Material

} from './entities/material.entity';

@Injectable()

export class MaterialsService{

constructor(

@InjectRepository(

Material

)

private readonly materialRepository:

Repository<Material>

){}

async create(

body:any

){

const material=

this.materialRepository.create({

name:

body.name,

unit_price:

body.unit_price,

stock:

body.stock,

unit:

body.unit

});

await this.materialRepository.save(

material

);

return{

message:

'Material creado',

material

};

}

async findAll(){

return await this.materialRepository.find({

order:{

name:

'ASC'

}

});

}

}