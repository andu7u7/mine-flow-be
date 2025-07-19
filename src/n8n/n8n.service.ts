import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class N8nService {
  constructor(private readonly configService: ConfigService) {}

  async testing(): Promise<any> {
    const n8nUrl = this.configService.get<string>('URL_N8N');

    if (!n8nUrl) {
      throw new Error('URL_N8N is not defined in the environment variables');
    }

    const req = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (req.status !== 200) {
      throw new Error(`Error al llamar a n8n: ${req.status} ${req.statusText}`);
    }

    const apiResponse = await req.text();

    return {
      message: JSON.parse(apiResponse) as string,
      status: 'success',
    };
  }
}
