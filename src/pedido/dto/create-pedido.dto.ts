import { IsInt, IsNumber, IsString, IsOptional, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { StatusPedido, FormaPagamento } from '@prisma/client';

class CreateItemPedidoDto {
  @IsInt()
  produtoId: number;

  @IsInt()
  quantidade: number;

  @IsNumber()
  subtotal: number;
}

export class CreatePedidoDto {
  @IsInt()
  clienteId: number;

  @IsInt()
  usuarioId: number;

  @IsEnum(StatusPedido)
  status: StatusPedido;

  @IsNumber()
  total: number;

  @IsEnum(FormaPagamento)
  formaPagamento: FormaPagamento;

  @IsOptional()
  @IsString()
  observacoes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateItemPedidoDto)
  itens: CreateItemPedidoDto[];
}
