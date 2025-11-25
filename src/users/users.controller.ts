import { Controller, Get, Param } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Belton Alberto' },
  { id: 4, name: 'Maria Justine' },
];

@Controller()
export class UsersController {
  @Get('/users')
  getUsers(): User[] {
    return users;
  }

  @Get('/user/:id')
  getUser(@Param('id') id: number): User | { msg: string } | undefined {
    if (!id) return { msg: 'Invalid id' };
    if (users.length > id) return { msg: 'User not found' };
    return users.find((user) => user.id === id);
  }
}
