import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FilterClienteDto } from './dto/filter-cliente.dto';
import { Query } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() dto: CreateClienteDto) {
    return this.clienteService.create(dto);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get('buscar')    
  findByFilter(@Query() filters: FilterClienteDto) {
    return this.clienteService.findByFilter(filters);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClienteDto) {
    return this.clienteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clienteService.remove(id);
  }
}
