import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Users } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getUser(@Param('id') id: number): Promise<Users | null> {
    const user = await this.userService.getOneUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Get('search/:name')
  async searchUserByName(@Param('name') name: string): Promise<Users | null> {
    const user = await this.userService.getOneUserByName(name);
    if (!user) {
      throw new NotFoundException(`User with name ${name} not found`);
    }
    return user;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() data: Prisma.UsersCreateInput): Promise<Users> {
    data.titular_ingemmet = data.titular_ingemmet.trim().toUpperCase();
    return await this.userService.createUser(data);
  }

  @Get('validate')
  @HttpCode(HttpStatus.OK)
  validateUserRoot(): { status: boolean } {
    return { status: false };
  }

  @Get('validate/:nombreTitular')
  @HttpCode(HttpStatus.OK)
  async validateUser(
    @Param('nombreTitular') nombreTitular: string,
  ): Promise<{ status: boolean }> {
    return await this.userService.verifyUserTitle(nombreTitular);
  }
}
