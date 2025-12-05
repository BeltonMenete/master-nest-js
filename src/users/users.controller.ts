import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller()
export class UsersController {
  @Get('users/{:id}')
  public getUser(
    @Param('id', ParseIntPipe) id?: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    return {
      id,
      limit,
      page,
      types: {
        id: typeof id,
        limit: typeof limit,
        page: typeof page,
      },
    };
  }

  @Post('users')
  public createUser(@Body() newUser: CreateUserDto) {
    console.log('see it : ');
    console.log(newUser instanceof CreateUserDto);
    return {
      message: 'User was created successfully!',
    };
  }

  @Patch('users')
  public updateUser() {
    return ' You sent a patch request to this endpoint users  ';
  }

  @Delete('users')
  public deleteUser(@Param('id') id?: string) {
    return 'You sent a delete request to this endpoint user ';
  }
}
