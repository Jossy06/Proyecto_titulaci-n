import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {

  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(4)
  pin!: string;

  @IsNotEmpty()
  business_name!: string;

}