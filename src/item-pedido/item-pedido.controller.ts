import {
    Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe
  } from '@nestjs/common';
  import { ItemPedidoService } from './item-pedido.service';
  import { CreateItemPedidoDto } from './dto/create-item-pedido.dto';
  import { UpdateItemPedidoDto } from './dto/update-item-pedido.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  
  @UseGuards(JwtAuthGuard)
  @Controller('itens-pedido')
  export class ItemPedidoController {
    constructor(private readonly service: ItemPedidoService) {}
  
    @Post()
    create(@Body() dto: CreateItemPedidoDto) {
      return this.service.create(dto);
    }
  
    @Get()
    findAll() {
      return this.service.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.service.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateItemPedidoDto) {
      return this.service.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.service.remove(id);
    }
  }
  