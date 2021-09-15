const socket = window.io();
const button = document.querySelector('#pingButton');

button.addEventListener('click', (event) => {
  socket.emit('ping');
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  
  li.innerText = message;
  messagesUl.appendChild(li);
}

socket.on('ola', (message) => createMessage(message));
socket.on('pong', (message) => createMessage(message));