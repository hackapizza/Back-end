import { Cargo } from '../../../generated/prisma';
import { IsEnum, IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John Cena' })
  nome: string;

  @IsEmail()
  @ApiProperty({ example: 'JohnCena@outlook.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'YouCantSeeMe' })
  senha: string;

  @IsEnum(Cargo)
  @ApiProperty({
    example: Cargo.gerente, 
    enum: Cargo,            
  })
  cargo: Cargo;
}
