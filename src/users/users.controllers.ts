import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAllUsers(@Query() query: any) {
    const { offset, limit } = query;
    return this.userService.findAll(offset, limit);
  }

  @Get(':id')
  findOneUser(@Param() params: any) {
    const id = params.id;
    return this.userService.findOne(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  deleteUser(@Param() params: any) {
    const id = params.id;
    return this.userService.delete(id);
  }

  @Patch(':id')
  updateUser(@Param() params: any, @Body() body: any) {
    const id = params.id;
    const user = body;
    return this.userService.update(id, user);
  }
}
