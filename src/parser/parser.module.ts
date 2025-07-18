import { Module } from '@nestjs/common';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ParserController],
  providers: [ParserService],
  imports: [PrismaModule],
})
export class ParserModule {}
