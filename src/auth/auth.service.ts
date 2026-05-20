import {

 Injectable,

 ConflictException,

 BadRequestException,

 UnauthorizedException

} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';

import { User } from '../users/entities/user.entity';

@Injectable()

export class AuthService {

 constructor(

  @InjectRepository(User)

  private userRepository:Repository<User>,

  private jwtService:JwtService

 ){}

 async register(body:any){

  console.log(
   'BODY =>',
   body
  );

  if(

   !body.name ||

   !body.email ||

   !body.pin ||

   !body.business_name

  ){

   throw new BadRequestException(

    'Faltan datos'

   );

  }

  const exists=

  await this.userRepository.findOne({

   where:{

    email:body.email

   }

  });

  if(exists){

   throw new ConflictException(

    'Este correo ya está registrado'

   );

  }

  const user=

  this.userRepository.create({

   name:body.name,

   email:body.email,

   pin:body.pin,

   business_name:body.business_name

  });

  await this.userRepository.save(

   user

  );

  return{

   message:'Usuario creado',

   user:{

    id:user.id,

    name:user.name,

    email:user.email,

    business_name:user.business_name

   }

  };

 }

 async login(body:any){

  console.log(
   'LOGIN =>',
   body
  );

  if(

   !body.email ||

   !body.pin

  ){

   throw new BadRequestException(

    'Correo y PIN son obligatorios'

   );

  }

  const user=

  await this.userRepository.findOne({

   where:{

    email:body.email

   }

  });

  if(!user){

   throw new UnauthorizedException(

    'Correo incorrecto'

   );

  }

  if(

   user.pin!==body.pin

  ){

   throw new UnauthorizedException(

    'PIN incorrecto'

   );

  }

  const token=

  this.jwtService.sign({

   id:user.id,

   email:user.email

  });

  return{

   message:'Login exitoso',

   token,

   user:{

    id:user.id,

    name:user.name,

    email:user.email,

    business_name:user.business_name

   }

  };

 }

}