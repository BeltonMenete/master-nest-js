import { Controller } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

@Controller()
export class UsersController {}
