import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/app/ok')
  getHello(): object {
    return {
      name: 'Belton',
      age: 20,
      speed: 20,
    };
  }
}
