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
import { CreateUserDto } from 'src/users/dto/CreateUserDto';
import { GetUserParamDto } from './dto/GetUserParamDto';

@Controller()
export class UsersController {
  @Get('users/{:id}')
  public getUser(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    console.log(getUserParamDto);
    return {
      getUserParamDto,
      limit,
      page,
      types: {
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
