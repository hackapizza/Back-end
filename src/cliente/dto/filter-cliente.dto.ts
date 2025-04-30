import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterClienteDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Maria' })
  nome?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '12345678900' })
  cpf?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '(11) 99999-9999' })
  telefone?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Erechim' })
  cidade?: string;
}
