import { IsInt, IsNumber } from 'class-validator';

export class CreateItemPedidoDto {
  @IsInt()
  pedidoId: number;

  @IsInt()
  produtoId: number;

  @IsInt()
  quantidade: number;

  @IsNumber()
  subtotal: number;
}
