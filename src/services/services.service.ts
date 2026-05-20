import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { BeautyService } from './entities/service.entity';

@Injectable()

export class ServicesService{

 constructor(

 @InjectRepository(

 BeautyService

 )

 private serviceRepository:

 Repository<BeautyService>

 ){}

 async create(

 body:any

 ){

  const service=

  this.serviceRepository.create({

   name:body.name,

   category:body.category,

   base_price:body.base_price,

   duration_minutes:

   body.duration_minutes

  });

  await this.serviceRepository.save(

   service

  );

  return{

   message:

   'Servicio creado',

   service

  };

 }

}