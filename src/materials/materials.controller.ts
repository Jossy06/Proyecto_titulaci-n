import {

Controller,
Post,
Get,
Body

} from '@nestjs/common';

import {

MaterialsService

} from './materials.service';

@Controller(

'materials'

)

export class MaterialsController{

constructor(

private readonly materialsService:

MaterialsService

){}

@Post()

create(

@Body()

body:any

){

return this.materialsService.create(

body

);

}

@Get()

findAll(){

return this.materialsService.findAll();

}

}