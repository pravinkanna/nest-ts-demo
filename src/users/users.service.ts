import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      dob: 1992,
      name: 'Pravin',
      tier: 'Premium',
    },
  ];

  findAll(offset: number, limit: number) {
    console.log(`get users from DB from offset ${offset} and limit ${limit}`);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === +id);
    if (!user) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  create(user: any) {
    this.users.push(user);
    return `User ${user.id} Created`;
  }

  update(id: number, user: CreateUserDto) {
    const userIndex = this.users.findIndex((item) => item.id === +id);
    if (userIndex < 0) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }
    // this.users[userIndex] = user;
    return user;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((item) => item.id === +id);
    if (userIndex < 0) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.users.splice(userIndex, 0);
    return `User ${id} Deleted`;
  }
}
