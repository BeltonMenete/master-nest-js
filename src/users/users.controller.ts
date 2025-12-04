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
} from '@nestjs/common';

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
  public createUser(@Body() allObj: any, @Body('email') body?: any) {
    console.log('see it : ');
    console.log(allObj);
    return body;
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
