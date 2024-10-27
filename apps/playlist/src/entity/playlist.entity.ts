import { Music } from 'apps/music/src/music.entity';
import {
  BaseEntity,
  Column,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Playlist extends BaseEntity {
  @PrimaryGeneratedColumn()
  playlistId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  mood: string;

  @Column()
  createdAt: Date;

  @ManyToMany(() => Music, (music) => music.playlists)
  @JoinTable()
  musics: Music[];
}
