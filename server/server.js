const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
// crear http para el servidior de io
const httpServer = createServer(app)

const io = new Server(httpServer, {
  // configurar cors
  cors: {
    origin: "http://127.0.0.1:5500"
  }
});

io.on('connection', (socket) => {
  console.log(socket.id);
  setInterval(() => {
    const time = new Date()
    io.emit('notification', time.getMilliseconds())
  }, 2000 )
});

httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});