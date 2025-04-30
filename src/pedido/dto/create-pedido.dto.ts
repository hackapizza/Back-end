import { IsInt, IsNumber, IsString, IsOptional, IsArray, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { StatusPedido, FormaPagamento } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

class CreateItemPedidoNestedDto {
  @IsInt()
  @ApiProperty({ example: 1 })
  produtoId: number;

  @IsInt()
  @ApiProperty({ example: 2 })
  quantidade: number;

  @IsNumber()
  @ApiProperty({ example: 90.0 })
  subtotal: number;
}

export class CreatePedidoDto {
  @IsInt()
  @ApiProperty({ example: 1 })
  clienteId: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ example: 1 })
  usuarioId: number;

  @IsEnum(StatusPedido)
  @ApiProperty({ enum: StatusPedido, example: StatusPedido.recebido })
  status: StatusPedido;

  @IsNumber()
  @ApiProperty({ example: 120.5 })
  total: number;

  @IsEnum(FormaPagamento)
  @ApiProperty({ enum: FormaPagamento, example: FormaPagamento.pix })
  formaPagamento: FormaPagamento;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Sem cebola', required: false })
  observacoes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({ type: [CreateItemPedidoNestedDto] })
  @Type(() => CreateItemPedidoNestedDto)
  itens: CreateItemPedidoNestedDto[];
}
