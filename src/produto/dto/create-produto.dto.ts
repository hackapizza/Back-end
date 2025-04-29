import { IsEnum, IsOptional, IsString, IsNumber, IsBoolean, IsUrl } from 'class-validator';
import { Categoria } from '@prisma/client';

export class CreateProdutoDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsNumber()
  preco: number;

  @IsEnum(Categoria)
  categoria: Categoria;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  tamanho?: string;

  @IsOptional()
  sabores?: any; // ou defina uma interface melhor se tiver estrutura fixa

  @IsOptional()
  @IsNumber()
  volumeMl?: number;

  @IsOptional()
  @IsNumber()
  tempoPreparoEstimado?: number;

  @IsOptional()
  @IsBoolean()
  disponivel?: boolean;
}
