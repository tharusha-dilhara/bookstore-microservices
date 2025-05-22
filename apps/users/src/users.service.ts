import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 30,
    },
    {
      id: 3,
      firstName: 'Jim',
      lastName: 'Beam',
      age: 35,
    },
  ];

  findAll() {
    return this.users;
  }
}
