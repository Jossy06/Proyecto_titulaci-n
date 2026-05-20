import {

Controller,
Post,
Get,
Body

} from '@nestjs/common';

import {

ServiceMaterialsService

} from './service-materials.service';

@Controller(

'service-materials'

)

export class ServiceMaterialsController{

constructor(

private readonly serviceMaterialsService:

ServiceMaterialsService

){}

@Post()

create(

@Body()

body:any

){

return this.serviceMaterialsService.create(

body);

}

@Get()

findAll(){

return this.serviceMaterialsService.findAll();

}

}