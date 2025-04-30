import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMetadata(): object {
    return {
      name: 'API Restaurante',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    };
  }
}
