import { Playlist } from 'apps/playlist/src/entity/playlist.entity';
import {
  BaseEntity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Music extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  uploadedAt: Date;

  @Column()
  artist: string;

  @ManyToMany(() => Playlist, (playlist) => playlist.musics)
  playlists: Playlist[];
}
