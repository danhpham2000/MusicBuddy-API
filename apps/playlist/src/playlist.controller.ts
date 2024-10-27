import { Controller } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @MessagePattern({ cmd: 'get-all-playlists' })
  async getAllPlaylists() {
    return await this.playlistService.findAllPlaylist();
  }
}
