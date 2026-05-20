import {

Module

} from '@nestjs/common';

import {

TypeOrmModule

} from '@nestjs/typeorm';

import {

ServiceMaterial

} from './entities/service-material.entity';

import {

BeautyService

} from '../services/entities/service.entity';

import {

Material

} from '../materials/entities/material.entity';

import {

ServiceMaterialsController

} from './service-materials.controller';

import {

ServiceMaterialsService

} from './service-materials.service';

@Module({

imports:[

TypeOrmModule.forFeature([

ServiceMaterial,
BeautyService,
Material

])

],

controllers:[

ServiceMaterialsController

],

providers:[

ServiceMaterialsService

]

})

export class ServiceMaterialsModule{}