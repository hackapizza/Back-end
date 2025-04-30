import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { FilterPedidoDto } from './dto/filter-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  // Alterei o método para receber o usuarioId
  async create(dto: CreatePedidoDto, usuarioId: number) {
    return this.prisma.pedido.create({
      data: {
        clienteId: dto.clienteId,
        usuarioId: usuarioId,  
        dataPedido: new Date(),
        status: dto.status,
        total: dto.total,
        formaPagamento: dto.formaPagamento,
        observacoes: dto.observacoes,
        itens: {
          create: dto.itens.map(item => ({
            produtoId: item.produtoId,
            quantidade: item.quantidade,
            subtotal: item.subtotal,
          })),
        },
      },
      include: {
        itens: true,
      },
    });
  }

  findAll() {
    return this.prisma.pedido.findMany({
      where: { deletadoEm: null },
      include: { itens: true, cliente: true, usuario: true },
    });
  }

  findByFilter(filters: FilterPedidoDto) {
    const { status, clienteId, dataInicial, dataFinal } = filters;

    return this.prisma.pedido.findMany({
      where: {
        deletadoEm: null,
        status,
        clienteId: clienteId ? Number(clienteId) : undefined,
        dataPedido: dataInicial || dataFinal ? {
          gte: dataInicial ? new Date(dataInicial) : undefined,
          lte: dataFinal ? new Date(dataFinal) : undefined,
        } : undefined,
      },
      include: {
        itens: true,
        cliente: true,
        usuario: true,
      },
    });
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findFirst({
      where: { id, deletadoEm: null },
      include: {
        itens: {
          include: { produto: true },
        },
        cliente: true,
        usuario: true,
      },
    });
    if (!pedido) throw new NotFoundException('Pedido não encontrado');
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto) {
    await this.findOne(id);
    return this.prisma.pedido.update({
      where: { id },
      data: {
        status: dto.status,
        formaPagamento: dto.formaPagamento,
        observacoes: dto.observacoes,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pedido.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}
