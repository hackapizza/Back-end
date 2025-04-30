import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'john.doe@example.com', // Exemplo de um email válido
    description: 'Email do usuário para login', // Descrição opcional
  })
  email: string;

  @ApiProperty({
    example: 'senhaSegura123', // Exemplo de senha (lembre-se de que isso é apenas para fins de exemplo, não use senhas reais)
    description: 'Senha do usuário para login', // Descrição opcional
  })
  senha: string;
}
