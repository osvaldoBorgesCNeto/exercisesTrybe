const socket = window.io();

const { username } = Qs.parse(location.search, { ignoreQueryPrefix: true });

const buttonLance = document.querySelectorAll('.buttonLance');

buttonLance.forEach((btn) => btn.addEventListener('click', ({ target }) => {
  socket.emit('lance', { name: target.name, username });
    
  return false;
}));

socket.on('setInitialValues', (itens, users) => {
  Object.entries(itens).forEach((iten) => {
    if (iten[1] >= 100) {
      buttonLance.forEach((btn, index) => {
        if (btn.name === iten[0]) {
          btn.innerHTML = `Produto arrematado - ${Object.values(users)[index]}`;
          btn.disabled = true
        }
      })
    }
    document.querySelector(`#${iten[0]}`).innerHTML = iten[1];
  });
});

socket.on('updateLance', ({ lanceNumber, name, users }) => {
  const valueLance = document.querySelector(`#${name}`);

  if (lanceNumber === 100) {
    valueLance.innerHTML = lanceNumber.toString();
    buttonLance.forEach((btn, index) => {
      if (btn.name === name) {
        btn.innerHTML = `Produto arrematado - ${Object.values(users)[index]}`;
        btn.disabled = true
      }
    })
  } else {
    valueLance.innerHTML = lanceNumber.toString();
  }

  return false;
});
