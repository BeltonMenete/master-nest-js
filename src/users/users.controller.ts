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
  @Get('users{/*id}')
  public getUser(@Param() param?: any, @Query('ishappy') isHappy?: boolean) {
    console.log(typeof param);
    console.log(typeof isHappy);
    return {
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
