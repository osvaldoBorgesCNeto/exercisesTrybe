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

require('./sockets/server')(io);

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/public/login.html');
});

http.listen(PORT, () => console.log(`Servidor Ligado na port ${PORT}`));
