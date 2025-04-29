import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste se seu PrismaService estiver em outro local
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(data.senha, 10); // 10 é o número de ciclos de salt
    
    const usuario = await this.prisma.usuario.create({
      data: {
        ...data,
        senha: hashedPassword, 
      },
    });

    return usuario;
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      where: { deletadoEm: null },
    });
  }

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: { id } });
    if (!usuario || usuario.deletadoEm) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  async update(id: number, data: UpdateUsuarioDto) {
    await this.findOne(id); // Garante que o usuário existe
    return this.prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Garante que o usuário existe
    return this.prisma.usuario.update({
      where: { id },
      data: { deletadoEm: new Date() },
    });
  }
}
