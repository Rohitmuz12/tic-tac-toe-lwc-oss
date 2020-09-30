// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

const http = require('http');
const server = http.Server(app);
const socketIo = require('socket.io');

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

server.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);

// const io = socketIo(server);

// io.on('connection', (socket) => {
//     console.log('connected');
//     socket.on('connect', () => {
//         console.log('connected user');
//     })
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//         console.log('emmiting event');
//         socket.emit('message1',{message : 'Hello there!'});
//     })

//     socket.on('message', (data) => {
//         // console.log('user disconnected');
//         console.log(data);
//         socket.emit('message1',{message : 'hello client'});
//     });
// });
