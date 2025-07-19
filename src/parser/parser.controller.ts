import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ParserService } from './parser.service';
import { ParseHtmlDto } from './dto/parse-html.dto';

@Controller('parser')
export class ParserController {
  constructor(private readonly parserService: ParserService) {}

  @Post('html')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async parseHtml(@Body() parseHtmlDto: ParseHtmlDto): Promise<any> {
    return await this.parserService.processHtml(parseHtmlDto.htmlContent);
  }
}
