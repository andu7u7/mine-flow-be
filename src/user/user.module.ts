import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserService, MailService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
