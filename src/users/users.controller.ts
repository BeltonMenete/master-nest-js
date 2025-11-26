import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

type User = {
  id: number;
  name: string;
};

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getUsers(): User[] {
    return this.usersService.users;
  }

  @Get('/users/:id')
  getUser(@Param('id') id: string): User | { msg: string } | undefined {
    if (!id) return { msg: 'Invalid id' };
    if (this.usersService.users.length < parseInt(id))
      return { msg: 'User not found' };
    return this.usersService.users.find((user) => user.id === parseInt(id));
  }

  @Post('/users')
  postUser(@Body() user: User) {
    console.log('received user');
    console.log(user);
    this.usersService.users.push(user);
    return user;
  }

  @Delete('/users/:id')
  deleteUser(@Param('id') id: string): User | { msg: string } | undefined {
    if (!id) return { msg: 'Invalid id' };
    if (this.usersService.users.length < parseInt(id))
      return { msg: 'User not found' };
    const user = this.usersService.users.find(
      (user) => user.id === parseInt(id),
    );
    if (!user) return { msg: 'User not found' };
    this.usersService.users = this.usersService.users.filter(
      (user) => user.id !== parseInt(id),
    );
    return user;
  }
  @Put('/users/:id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return { msg: 'Invalid id' };
    }

    const userIndex = this.usersService.users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return { msg: 'User not found' };
    }

    // Update the user
    this.usersService.users[userIndex] = {
      ...this.usersService.users[userIndex],
      ...user,
    };

    return { msg: 'User updated', user: this.usersService.users[userIndex] };
  }
}
