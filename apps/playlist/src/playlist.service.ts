import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entity/playlist.entity';
import { Repository } from 'typeorm';
import { CreatePlaylistDto } from '@app/common';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) {}

  // User create new Playlist with playlist added
  async createPlaylist(
    createPlaylistDto: CreatePlaylistDto,
  ): Promise<Playlist> {
    const newPlaylist = await this.playlistRepository.create(createPlaylistDto);
    const playlistExists =
      await this.playlistRepository.findOneBy(createPlaylistDto);

    if (playlistExists) {
      throw new ConflictException('Playlist already exists');
    }

    try {
      await newPlaylist.save();
    } catch (err) {
      return err;
    }
    return newPlaylist;
  }

  async findAllPlaylist(): Promise<Playlist[]> {
    return await this.playlistRepository.find();
  }

  async findPlaylistById(id: number): Promise<Playlist> {
    return await this.playlistRepository.findOne({ where: { playlistId: id } });
  }
}
