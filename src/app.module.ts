import { Module } from '@nestjs/common';
import { ParserModule } from './parser/parser.module';
import { N8nModule } from './n8n/n8n.module';
import { WebsocketModule } from './websocket/websocket.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ConcesionesModule } from './concesiones/concesiones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ParserModule,
    N8nModule,
    WebsocketModule,
    PrismaModule,
    ConcesionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
