import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePlaylistDto } from '@app/common';

@Controller()
export class ApiGatewayController {
  constructor(
    @Inject('PLAYLIST_SERVICE') private playlistClient: ClientProxy,
  ) {}

  @Post('playlists')
  async createPlaylist(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistClient.emit('create-playlist', createPlaylistDto);
  }
}
