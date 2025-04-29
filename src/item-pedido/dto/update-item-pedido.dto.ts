import { IsOptional, IsInt, IsNumber } from 'class-validator';

export class UpdateItemPedidoDto {
  @IsOptional()
  @IsInt()
  quantidade?: number;

  @IsOptional()
  @IsNumber()
  subtotal?: number;
}
