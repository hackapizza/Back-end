import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      secret: 'chave-secreta-aqui', // Use env vars em produção!
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
