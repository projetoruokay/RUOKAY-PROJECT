import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getMessages() {
    throw new Error('Method not implemented.');
  }
  sendMessage(newMessage: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private socket: Socket) { }
}

public sendMessage(message) {
  this.socket.emit('new-message', message);
}

public getMessages = () => {
  return Observable.create((observer) => {
          this.socket.on('new-message', (message) => {
              observer.next(message);
          });
  });
}
