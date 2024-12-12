import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serverless from 'serverless-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();

  // Return serverless handler
  return serverless(app.getHttpAdapter().getInstance());
}

bootstrap().then((handler) => {
  module.exports.handler = handler;  // Export handler to be used as a serverless function
});
