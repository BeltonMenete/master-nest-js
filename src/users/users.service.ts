import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

@Injectable()
export class UsersService {
  public users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Belton Alberto' },
    { id: 4, name: 'Maria Justine' },
  ];
}
