import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';

@Controller()
export class UsersController {
  // @Get('users')
  // public getUsers() {
  //   return ' You sent a get request to users endpoint with no params';
  // }

  @Get('users{/*id}{/*txt}')
  public getUser(@Param() params?: any) {
    return `you sent a get request to users endpoints: ${params.id} & ${params.txt}`;
  }

  @Post('users')
  public createUser() {
    return 'You sent a post request to users endpoint';
  }

  @Patch('users')
  public updateUser() {
    return ' You sent a patch request to this endpoint user';
  }

  @Delete('users')
  public deleteUser(@Param('id') id?: string) {
    return 'You sent a delete request to this endpoint user ';
  }
}
