import { IsAlpha, IsDate } from 'class-validator';

export class CreatePlaylistDto {
  title: string;
  description: string;

  @IsAlpha()
  mood: string;

  @IsDate()
  createdAt: Date;
}
