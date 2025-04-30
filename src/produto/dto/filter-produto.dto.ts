// filter-produto.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { Categoria } from '@prisma/client';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterProdutoDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Pizza Portuguesa' })
  nome?: string;

  @IsOptional()
  @IsEnum(Categoria)
  @ApiPropertyOptional({ enum: Categoria, example: Categoria.pizza })
  categoria?: Categoria;

  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  @ApiPropertyOptional({ example: true })
  disponivel?: boolean;
}
