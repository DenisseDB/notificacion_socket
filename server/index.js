// backend

// http server
const http = require('http').createServer();

// import socket.io
const io = require('socket.io')(http, {
    // permite el acceso a cualquier url
    cors: {origin: "*"}
});

// conexiones entrantes 
io.on('connection', (socket) => {
    console.log('A user connected');

    // notificaciones
    socket.on('notification', (message) => {
        console.log('Notificacion:', message);
        // mandar la notificacion a todos
        io.emit('notification', message);
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));