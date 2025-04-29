import { IsOptional, IsEnum, IsString } from 'class-validator';
import { StatusPedido } from '@prisma/client';

export class FilterPedidoDto {
  @IsOptional()
  @IsEnum(StatusPedido)
  status?: StatusPedido;

  @IsOptional()
  @IsString()
  clienteId?: string;

  @IsOptional()
  @IsString()
  dataInicial?: string;

  @IsOptional()
  @IsString()
  dataFinal?: string;
}
