import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';

@Injectable()
export class ItemPedidoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateItemPedidoDto) {
    return this.prisma.itemPedido.create({ data: dto });
  }

  async findAll() {
    return this.prisma.itemPedido.findMany();
  }

  async findOne(id: number) {
    const item = await this.prisma.itemPedido.findUnique({ where: { id } });
    if (!item) throw new NotFoundException('ItemPedido não encontrado');
    return item;
  }

  async update(id: number, dto: UpdateItemPedidoDto) {
    return this.prisma.itemPedido.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.itemPedido.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}
