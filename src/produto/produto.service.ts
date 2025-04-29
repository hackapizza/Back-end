import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { FilterProdutoDto } from './dto/filter-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProdutoDto) {
    return this.prisma.produto.create({ data });
  }

  findAll() {
    return this.prisma.produto.findMany({
      where: { deletadoEm: null },
    });
  }

  findByFilter(filters: FilterProdutoDto) {
    const { nome, categoria, disponivel } = filters;
    return this.prisma.produto.findMany({
      where: {
        deletadoEm: null,
        nome: nome ? { contains: nome, mode: 'insensitive' } : undefined,
        categoria,
        disponivel,
      },
    });
  }

  async findOne(id: number) {
    const produto = await this.prisma.produto.findFirst({
      where: { id, deletadoEm: null },
    });
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async update(id: number, data: UpdateProdutoDto) {
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.produto.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}