import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'string helllo from nest';
  }

  getMessage(): string {
    return 'This is the message: "Belton"';
  }
}
