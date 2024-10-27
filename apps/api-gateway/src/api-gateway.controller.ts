import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('PLAYLIST_SERVICE') private playlistClient: ClientProxy,
  ) {}

  // @Post("playlists")
  // async createPlaylist(@Body() )

}
