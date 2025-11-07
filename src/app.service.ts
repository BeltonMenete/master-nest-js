import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      name: 'Belton',
      age: 20,
      speed: 20,
    };
  }
}
