import { Controller } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreatePlaylistDto } from '@app/common';

@Controller()
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @MessagePattern({ cmd: 'get-all-playlists' })
  async getAllPlaylists() {
    return await this.playlistService.findAllPlaylist();
  }

  @EventPattern({ cmd: 'create-playlist' })
  async createPlaylist(createPlaylistDto: CreatePlaylistDto) {
    return await this.playlistService.createPlaylist(createPlaylistDto);
  }

  @MessagePattern({ cmd: 'get-one-playlist' })
  async getPlaylist(playlistId: number) {
    return await this.playlistService.findPlaylistById(playlistId);
  }
}
