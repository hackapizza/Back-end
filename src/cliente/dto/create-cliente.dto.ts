import { IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @IsString()
  @ApiProperty({ example: 'Maria Oliveira' })
  nome: string;

  @IsString()
  @Length(11, 14)
  @ApiProperty({ example: '12345678900' })
  cpf: string;

  @IsString()
  @ApiProperty({ example: '(11) 99999-9999' })
  telefone: string;

  @IsString()
  @ApiProperty({ example: 'Centro' })
  bairro: string;

  @IsString()
  @ApiProperty({ example: 'Rua das Flores' })
  rua: string;

  @IsString()
  @ApiProperty({ example: '123' })
  numero: string;

  @IsString()
  @ApiProperty({ example: 'São Paulo' })
  cidade: string;
}
