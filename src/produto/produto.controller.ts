import {
    Controller, Get, Post, Body, Param, Patch, Delete, UseGuards, ParseIntPipe, Query,
  } from '@nestjs/common';
  import { ProdutoService } from './produto.service';
  import { CreateProdutoDto } from './dto/create-produto.dto';
  import { UpdateProdutoDto } from './dto/update-produto.dto';
  import { FilterProdutoDto } from './dto/filter-produto.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { UsePipes, ValidationPipe } from '@nestjs/common';
  
  @UseGuards(JwtAuthGuard)
  @Controller('produtos')
  export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}
  
    @Post()
    create(@Body() dto: CreateProdutoDto) {
      return this.produtoService.create(dto);
    }
  
    @Get()
    findAll() {
      return this.produtoService.findAll();
    }
  
    @Get('buscar')
    @UsePipes(new ValidationPipe({ transform: true }))
    findByFilter(@Query() filters: FilterProdutoDto) {
        return this.produtoService.findByFilter(filters);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.produtoService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProdutoDto) {
      return this.produtoService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.produtoService.remove(id);
    }
  }
  