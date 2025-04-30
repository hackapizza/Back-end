import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Restaurante')
    .setDescription('Documentação da API para gerenciamento de pedidos, clientes, produtos e usuários.')
    .setVersion('1.0')
    .addBearerAuth() // Para uso com JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Acesso via /api

  app.enableCors({
    origin: 'http://localhost:3000', // ou '*' se quiser liberar para todos
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 4000);
  console.log(`API is running on port ${process.env.PORT ?? 4000}`);
}
bootstrap();
