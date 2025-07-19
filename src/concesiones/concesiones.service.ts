import { Injectable } from '@nestjs/common';
import { Prisma, Concesiones } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConcesionesService {
  constructor(private prismaService: PrismaService) {}

  async concesiones(): Promise<Concesiones[]> {
    return await this.prismaService.concesiones.findMany();
  }

  async concesion(id: number): Promise<Concesiones | null> {
    return await this.prismaService.concesiones.findUnique({
      where: { id },
    });
  }

  async createConcesion(
    data: Prisma.ConcesionesCreateInput,
  ): Promise<Concesiones> {
    return await this.prismaService.concesiones.create({ data });
  }

  async updateConcesion(id: number, data: Concesiones): Promise<Concesiones> {
    return await this.prismaService.concesiones.update({
      where: { id },
      data,
    });
  }

  async deleteConcesion(id: number): Promise<Concesiones> {
    return await this.prismaService.concesiones.delete({
      where: { id },
    });
  }
}
