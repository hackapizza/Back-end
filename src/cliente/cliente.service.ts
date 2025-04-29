import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { FilterClienteDto } from './dto/filter-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateClienteDto) {
    return this.prisma.cliente.create({ data: dto });
  }

  async findAll() {
    return this.prisma.cliente.findMany({
      where: { deletadoEm: null },
      orderBy: { criadoEm: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  async findByFilter(filters: FilterClienteDto) {
    return this.prisma.cliente.findMany({
      where: {
        deletadoEm: null,
        nome: filters.nome ? { contains: filters.nome, mode: 'insensitive' } : undefined,
        cpf: filters.cpf ? { contains: filters.cpf } : undefined,
        telefone: filters.telefone ? { contains: filters.telefone } : undefined,
        cidade: filters.cidade ? { contains: filters.cidade, mode: 'insensitive' } : undefined,
      },
      orderBy: { criadoEm: 'desc' },
    });
  }

  async update(id: number, dto: UpdateClienteDto) {
    return this.prisma.cliente.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    return this.prisma.cliente.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}
