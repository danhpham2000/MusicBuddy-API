import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Get('playlists')
  async getAllPlaylists() {
    return this.playlistClient.send({ cmd: 'get-all-playlists' }, '');
  }

  @Get('playlists/:id')
  async getPlaylist(@Param('id', ParseIntPipe) playlistId: number) {
    return this.playlistClient.send({ cmd: 'get-one-playlist' }, playlistId);
  }
}
