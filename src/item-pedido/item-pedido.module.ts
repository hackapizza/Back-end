import { Module } from '@nestjs/common';
import { ItemPedidoService } from './item-pedido.service';
import { ItemPedidoController } from './item-pedido.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ItemPedidoService, PrismaService],
  controllers: [ItemPedidoController]
})
export class ItemPedidoModule {}
