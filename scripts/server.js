/* eslint-disable dot-notation */
// Simple Express server setup to serve the build output
var roomId = {};
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 443;
const DIST_DIR = './docs';

const http = require('http');
const server = http.Server(app);
const socketIo = require('socket.io');

app.use(express.static(DIST_DIR));

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        "content-src 'self' 'unsafe-inline'"
    );
    return next();
});

// app.use('/', (req, res) => {
//     res.sendFile(path.resolve(DIST_DIR, 'index.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

server.listen(PORT, () => {
    console.log(`✅  Server started: http://${HOST}:${PORT}`);
    console.log(server);
});

const io = socketIo.listen(server);

io.on('connection', (socket) => {
    socket.on('create room', () => {
        socket.emit('get roomId', socket.id);
        roomId[socket.id] = socket.id;
        // eslint-disable-next-line dot-notation
        roomId[socket.id]['joinned'] = false;
    });

    socket.on('confirm room id', (data) => {
        if (!roomId[data.roomId]['joinned']) {
            console.log(roomId[data.roomId]);
            io.to(roomId[data.roomId]).emit('joinned', {
                roomId: socket.id,
                playerName: data.playerName,
                join: roomId['joinned']
            });
            // socket.emit('joinned', {roomId : socket.id});
            roomId[data.roomId]['joinned'] = true;
            console.log(roomId);
            console.log('joinned true');
        } else {
            socket.emit('room full', 'Room already full');
        }
    });

    socket.on('room id confirmation', (data) => {
        io.to(data.roomId).emit('successfully connected', {
            playerName: data.playerName
        });
    });

    socket.on('message', (data) => {
        console.log(data);
        io.emit('message1', { message: 'hello client' });
    });

    socket.on('play move', (data) => {
        io.to(data.roomId).emit('move played', {
            cordinate: data.cordinate
        });
    });

    socket.on('start again', (data) => {
        console.log('Start again');
        io.to(data.roomId).emit('rematch', 'rematch');
    });

    socket.on('player not available', (data) => {
        io.to(data.roomId).emit('no player', 'noPlayer');
    });
});
