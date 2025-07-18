import { IsString, IsNotEmpty } from 'class-validator';

export class ParseHtmlDto {
  @IsString()
  @IsNotEmpty({ message: 'El contenido HTML no puede estar vacío.' })
  htmlContent: string;
}
