import { Injectable } from '@nestjs/common';

@Injectable()
export class N8nService {
  private readonly n8nUrl = process.env.URL_N8N as string;

  async testing(): Promise<any> {
    const req = await fetch(this.n8nUrl, {
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
