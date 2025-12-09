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
import { PaginationQueryDto } from './dto/PaginationQueryDto';

@Controller()
export class UsersController {
  @Get('users/{:id}')
  public getUser(
    @Param() getUserParamDto: GetUserParamDto,
    @Query() paginationQueryDto: PaginationQueryDto,
  ) {
    console.log(getUserParamDto);
    console.log(paginationQueryDto);
    const { id } = getUserParamDto;
    const { limit, page } = paginationQueryDto;
    return {
      id,
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

  @Patch('users/{:id}')
  public updateUser(@Param('id') id?: number) {
    return {
      msg: 'You sent a patch request to this endpoint user ',
    };
  }

  @Delete('users')
  public deleteUser(@Param('id') id?: string) {
    return {
      msg: 'You sent a delete request to this endpoint user ',
    };
  }
}
