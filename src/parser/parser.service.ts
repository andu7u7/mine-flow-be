import { Injectable } from '@nestjs/common';

@Injectable()
export class ParserService {
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
}
