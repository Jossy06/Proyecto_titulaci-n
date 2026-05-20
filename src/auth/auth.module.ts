import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { User } from '../users/entities/user.entity';

@Module({

 imports:[

  TypeOrmModule.forFeature([
   User
  ]),

  JwtModule.register({

   secret:'beauty_app_secret',

   signOptions:{

    expiresIn:'7d'

   }

  })

 ],

 controllers:[
  AuthController
 ],

 providers:[
  AuthService

 ]

})

export class AuthModule{}