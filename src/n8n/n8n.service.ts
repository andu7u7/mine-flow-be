import { Injectable } from '@nestjs/common';

@Injectable()
export class N8nService {
  async testing(): Promise<any> {
    const req = await fetch(
      'http://n8n.krico.dev/webhook-test/3bf73c6e-c6fa-485f-bfd8-3e9e542524ea',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

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
