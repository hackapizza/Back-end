import { IsString, Length } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nome: string;

  @IsString()
  @Length(11, 14)
  cpf: string;

  @IsString()
  telefone: string;

  @IsString()
  bairro: string;

  @IsString()
  rua: string;

  @IsString()
  numero: string;

  @IsString()
  cidade: string;
}
