import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  findAll() {
    return ['Post 1', 'Post 2'];
  }
}
