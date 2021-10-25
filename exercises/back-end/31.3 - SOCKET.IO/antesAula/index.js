const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(express.static(__dirname + '/public'));

// require('./sockets/ping')(io);
// require('./sockets/chat')(io);
require('./sockets/room')(io);

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public/entrar.html');
});

http.listen(PORT, () => console.log(`Servidor ligado na port ${PORT}`));
