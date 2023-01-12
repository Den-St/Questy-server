import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.use(json({limit: '50mb'}));
  app.use(urlencoded({limit: '50mb', extended: true}));
  app.enableCors();
    
  await app.listen(port,() => {
    console.log("started at ",port);
  });
}
bootstrap();
