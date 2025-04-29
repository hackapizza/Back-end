import { Module } from '@nestjs/common';
import { ItemPedidoService } from './item-pedido.service';
import { ItemPedidoController } from './item-pedido.controller';

@Module({
  providers: [ItemPedidoService],
  controllers: [ItemPedidoController]
})
export class ItemPedidoModule {}
