import { Module } from '@nestjs/common';
import { ParserModule } from './parser/parser.module';
import { N8nModule } from './n8n/n8n.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [ParserModule, N8nModule, WebsocketModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
