import { IsInt, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemPedidoDto {
  @IsInt()
  @ApiProperty({
    example: 1, // Exemplo de pedidoId
    description: 'ID do pedido associado', // Descrição opcional
  })
  pedidoId: number;

  @IsInt()
  @ApiProperty({
    example: 2, // Exemplo de produtoId
    description: 'ID do produto que está sendo pedido', // Descrição opcional
  })
  produtoId: number;

  @IsInt()
  @ApiProperty({
    example: 1, // Exemplo de quantidade
    description: 'Quantidade do produto no pedido', // Descrição opcional
  })
  quantidade: number;

  @IsNumber()
  @ApiProperty({
    example: 29.99, // Exemplo de subtotal
    description: 'Subtotal do item (quantidade x preço unitário)', // Descrição opcional
  })
  subtotal: number;
}
