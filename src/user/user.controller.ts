import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Users } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getUser(@Body() data: Prisma.UsersCreateInput): Promise<Users> {
    return await this.userService.createUser(data);
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
