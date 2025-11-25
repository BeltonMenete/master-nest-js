import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get('/users')
  getUsers(): Array<object> {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
    ];
  }
}
