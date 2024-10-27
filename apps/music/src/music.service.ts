import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
  getHello(): string {
    return 'Hello World!';
  }
}
