import { Module } from '@nestjs/common';
import { ConcesionesController } from './concesiones.controller';
import { ConcesionesService } from './concesiones.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ConcesionesController],
  providers: [ConcesionesService, PrismaService],
})
export class ConcesionesModule {}
