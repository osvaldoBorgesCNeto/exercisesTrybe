module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username }) => {
    socket.emit('serverMessage', `Bem vindo ${username}!!!`);

    socket.broadcast.emit('serverMessage', `${username} acabou de entrar na sala`);

    socket.on('roomClientMessage', ({ message }) => {
      io.emit('serverMessage', `${username}: ${message}`)
    });

    socket.on('disconnect', () => {
      socket.broadcast.emit('serverMessage', `${username} acabou de se desconectar!`);
    });
  });

});
