import { NestFactory } from '@nestjs/core';
import { MusicModule } from './music.module';

async function bootstrap() {
  const app = await NestFactory.create(MusicModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
