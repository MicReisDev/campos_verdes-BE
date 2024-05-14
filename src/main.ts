import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import * as dotenv from 'dotenv';
import { ResponseInterceptor } from './DefaultMessages/ResponseDefault';
dotenv.config();



async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.useGlobalPipes(
    new ValidationPipe({}),
  );
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableCors();



  await app.listen(process.env.PORT).then(() => console.log(`Ouvindo na porta ${process.env.PORT}`))
}
bootstrap();
