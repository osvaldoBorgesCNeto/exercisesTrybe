const itens = {
  celValue: 20,
  tvValue: 90,
  noteValue: 5,
  headSetValue: 15,
};

const users = {
  celValue: "",
  tvValue: "",
  noteValue: "",
  headSetValue: ""
}

module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('setInitialValues', itens, users );

  socket.on('lance', ({ name, username }) => {
    const lanceNumber =  itens[name] + 5;
    itens[name] = lanceNumber;

    if (lanceNumber === 100) {
      users[name] = username;
    };

    io.emit('updateLance', { lanceNumber, name, users });
  });
});
