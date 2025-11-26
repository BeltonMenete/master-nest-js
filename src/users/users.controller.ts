import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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

  @Get('/users/:id')
  getUser(@Param('id') id: string): User | { msg: string } | undefined {
    if (!id) return { msg: 'Invalid id' };
    if (users.length < parseInt(id)) return { msg: 'User not found' };
    return users.find((user) => user.id === parseInt(id));
  }

  @Post('/users')
  postUser(@Body() user: User) {
    console.log('received user');
    console.log(user);
    users.push(user);
    return user;
  }
}
