import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

@Controller()
export class UsersController {
  // @Get('users')
  // public getUsers() {
  //   return ' You sent a get request to users endpoint with no params';
  // }

  @Get('users{/*id}{/*txt}')
  public getUser(@Param() params?: any, @Query() query?: any) {
    return `you sent a get request to users endpoints: ${params.id} & ${params.txt} | with querie - ${query.role.toUpperCase()} ${query.limit} ${query.offset}`;
  }

  @Post('users')
  public createUser(@Body() body?: any) {
    let txt = ' You sent a patch request to this endpoint users: ';
    console.log(body);
    for (let key in body) {
      txt += ` ${key} : ${body[key]} \n`;
    }
    return txt;
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
