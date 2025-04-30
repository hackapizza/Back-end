import { IsEnum, IsOptional, IsString, IsNumber, IsBoolean, IsUrl } from 'class-validator';
import { Categoria } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @IsString()
  @ApiProperty({ example: 'Pizza Portuguesa' })
  nome: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Pizza com ovos, presunto e cebola', required: false })
  descricao?: string;

  @IsNumber()
  @ApiProperty({ example: 45.99 })
  preco: number;

  @IsEnum(Categoria)
  @ApiProperty({ enum: Categoria, example: Categoria.pizza })
  categoria: Categoria;

  @IsOptional()
  @IsUrl()
  @ApiProperty({ example: 'https://example.com/pizza.jpg', required: false })
  imageUrl?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Grande', required: false })
  tamanho?: string;

  @IsOptional()
  @ApiProperty({ example: ['presunto', 'cebola', 'ovo'], required: false })
  sabores?: any; // ou defina uma interface melhor se tiver estrutura fixa

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 1000, required: false })
  volumeMl?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 25, required: false })
  tempoPreparoEstimado?: number;

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: true, required: false })
  disponivel?: boolean;
}
