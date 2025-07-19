import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    const validTitular = await this.verifyUserTitle(data.titular_ingemmet);
    if (!validTitular.status) {
      throw new BadRequestException(
        `El titular ${data.titular_ingemmet} no es válido en el servicio de geocatmin.`,
      );
    }
    return await this.prismaService.users.create({ data });
  }

  async getOneUser(id: number): Promise<Users | null> {
    return await this.prismaService.users.findUnique({
      where: { id },
    });
  }

  async verifyUserTitle(nombreTitular: string): Promise<{ status: boolean }> {
    const GEOCATMIN_BASE_QUERY_URL =
      'https://geocatmin.ingemmet.gob.pe/arcgis/rest/services/WGS84_18/WEBGIS_CATASTRO_MINERO_WGS84_18/MapServer/0/query';

    const queryParams = new URLSearchParams({
      where: `TIT_CONCES='${nombreTitular}'`,
      returnCountOnly: 'true',
      f: 'pjson',
    });

    const url = `${GEOCATMIN_BASE_QUERY_URL}?${queryParams.toString()}`;
    const req = await fetch(url);

    if (!req.ok) {
      throw new BadRequestException(
        `Error al consultar el servicio de geocatmin: ${req.status} ${req.statusText}`,
      );
    }

    const data = (await req.json()) as { count: number };

    return { status: data.count > 0 };
  }
}
