import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { N8nService } from './n8n.service';

@Controller('n8n')
export class N8nController {
  constructor(private readonly n8nService: N8nService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async getTesting(): Promise<any> {
    return await this.n8nService.testing();
  }
}
