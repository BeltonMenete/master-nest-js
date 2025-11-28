import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  GetApp() {
    return 'Wellcome to the api'.toUpperCase();
  }
}
