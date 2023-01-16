import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { join } from 'path';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  app.enableCors();
  app.use('/uploads/profileimages',express.static(join(process.cwd(), '/uploads/profileimages')));
  await app.listen(port,() => {
    console.log("started at ",port);
  });
}

bootstrap();
