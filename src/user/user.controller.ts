import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
