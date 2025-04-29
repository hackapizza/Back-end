import { Cargo } from '../../../generated/prisma';
import { IsEnum, IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsEnum(Cargo)
  cargo: Cargo;
}
