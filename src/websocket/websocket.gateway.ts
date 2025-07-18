import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MyWebSocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Cliente conectado: ${client.id}`);

    // Puedes emitir un evento a este cliente específico al conectarse
    client.emit('connected', { message: 'Bienvenido al servidor WebSocket!' });

    // O emitir a todos los clientes (broadcast)
    this.server.emit('userConnected', { userId: client.id });
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
    this.server.emit('userDisconnected', { userId: client.id });
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log(`Mensaje recibido: ${data}`);
    return data;
  }
}
