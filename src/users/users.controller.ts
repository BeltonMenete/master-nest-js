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
} from '@nestjs/common';

@Controller()
export class UsersController {
  // @Get('users')
  // public getUsers() {
  //   return ' You sent a get request to users endpoint with no params';
  // }

  @Get('users{/*id}')
  public getUser(
    @Ip() ip?: any,
    @Headers() headers?: any,
    @Param('id') id?: any,
    @Query('ishappy') isHappy?: boolean,
  ) {
    console.log(headers);
    console.log(ip);
    return {
      Ip: ip,
      id: parseInt(id[0]),
      isHappy: Boolean(isHappy),
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
