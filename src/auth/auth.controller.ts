import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')

export class AuthController {

  constructor(

    private readonly authService:AuthService

  ){}

  @Post('register')

  register(

    @Body() body:any

  ){

    console.log(
      'BODY =>',
      body
    );

    return this.authService.register(
      body
    );

  }

  @Post('login')

  login(

    @Body() body:any

  ){

    console.log(
      'LOGIN =>',
      body
    );

    return this.authService.login(
      body
    );

  }

}