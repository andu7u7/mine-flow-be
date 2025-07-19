import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
