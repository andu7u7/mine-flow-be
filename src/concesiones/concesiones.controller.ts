import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ConcesionesService } from './concesiones.service';
import { Concesiones, Prisma } from '@prisma/client';

@Controller('concesiones')
export class ConcesionesController {
  constructor(private readonly concesionesService: ConcesionesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllConcesiones(): Promise<Concesiones[]> {
    return await this.concesionesService.concesiones();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOneConcesion(@Param('id') id: string): Promise<Concesiones | null> {
    const concesion = await this.concesionesService.concesion(+id);
    if (!concesion) {
      throw new NotFoundException(`Concesion with id ${id} not found`);
    }
    return concesion;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createConcesion(
    @Body() data: Prisma.ConcesionesCreateInput,
  ): Promise<Concesiones> {
    return await this.concesionesService.createConcesion(data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteConcesion(@Param('id') id: string): Promise<Concesiones | null> {
    const concesion = await this.concesionesService.deleteConcesion(+id);
    if (!concesion) {
      throw new NotFoundException(`Concesion with id ${id} not found`);
    }
    return concesion;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateConcesion(
    @Param('id') id: string,
    @Body() data: Concesiones,
  ): Promise<Concesiones> {
    const concesion = await this.concesionesService.updateConcesion(+id, data);
    if (!concesion) {
      throw new NotFoundException(`Concesion with id ${id} not found`);
    }
    return concesion;
  }
}
