import { NestFactory } from '@nestjs/core';
import { PlaylistModule } from './playlist.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PlaylistModule,
    {
      transport: Transport.RMQ,
      options: { urls: ['amqp://rabbitmq:5672'], queue: 'playlist_queue' },
    },
  );
  await app.listen();
}
bootstrap();
