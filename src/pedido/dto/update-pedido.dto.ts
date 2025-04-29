import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusPedido, FormaPagamento } from '@prisma/client';

export class UpdatePedidoDto {
  @IsOptional()
  @IsEnum(StatusPedido)
  status?: StatusPedido;

  @IsOptional()
  @IsEnum(FormaPagamento)
  formaPagamento?: FormaPagamento;

  @IsOptional()
  @IsString()
  observacoes?: string;
}
