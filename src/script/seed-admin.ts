// scripts/seed-admin.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { UsuarioService } from '../../src/usuario/usuario.service';
import { Cargo } from '../../generated/prisma';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const usuarioService = app.get(UsuarioService);

  const admin = {
    nome: 'admin',
    email: 'admin@hotmail.com',
    senha: 'admin',
    cargo: Cargo.gerente,
  };

  const existing = await usuarioService.findByEmail(admin.email);
  if (existing) {
    console.log('Usuário admin já existe.');
  } else {
    const created = await usuarioService.create(admin);
    console.log('Usuário admin criado:', created);
  }

  await app.close();
}

bootstrap();
