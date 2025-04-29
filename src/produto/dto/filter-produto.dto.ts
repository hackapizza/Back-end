// filter-produto.dto.ts
import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { Categoria } from '@prisma/client';

export class FilterProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEnum(Categoria)
  categoria?: Categoria;

  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  disponivel?: boolean;
}
