import { Controller, Get, Param } from '@nestjs/common';

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
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
  {
    id: 3,
    name: 'John Belton',
    email: 'bymenete@gmail.com',
  },
];

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers(): User[] {
    return users;
  }

  @Get('/:id')
  getUser(@Param('id') id: string): any {
    if (parseInt(id) <= users.length) {
      return users.find((user) => user.id === parseInt(id));
    }
    return { error: 'User not found' };
  }
}
