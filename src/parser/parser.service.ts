import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParserService {
  constructor(private prismaService: PrismaService) {}

  processHtml(htmlContent: string): any {
    console.log('Recibido HTML para procesar.');

    const resultJson = {
      extractedData: {
        keywordsFound: [],
        summary: 'Este es un resumen simulado del contenido HTML.',
        content: htmlContent,
      },
    };

    return resultJson;
  }

  async getConcesiones(): Promise<any[]> {
    return await this.prismaService.concesiones.findMany();
  }
}
