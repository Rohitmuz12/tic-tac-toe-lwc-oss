import { LightningElement } from 'lwc';
import * as socketIo from 'socket.io-client';

export default class App extends LightningElement {
    connectedCallback() {
        const socket = socketIo.connect('http://localhost:3001/');
        socket.on('connect', () => {
            console.log('app connected');
            socket.emit('message', { message: 'Hello server1' });
        });

        socket.on('message1', (data) => {
            console.log(data);
        });
    }
}
