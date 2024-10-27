import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLAYLIST_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'playlist_queue' },
      },
      // {
      //   name: 'PLAYLIST_SERVICE',
      //   transport: Transport.RMQ,
      //   options: { urls: ['amqp://rabbitmq:5672'], queue: 'playlist_queue' },
      // },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
