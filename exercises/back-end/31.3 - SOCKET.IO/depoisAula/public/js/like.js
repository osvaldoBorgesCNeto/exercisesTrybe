const socket = window.io();

const likeButton = document.querySelector('#likeIcon');

likeButton.addEventListener('click', (event) => {
  const currentLikes = document.querySelector('#currentLikes');
  socket.emit('likePost', currentLikes.innerHTML);

  return false
});

socket.on('updateLike', (likeNumber) => {
  const currentLikes = document.querySelector('#currentLikes');
  currentLikes.innerHTML = likeNumber;
  return false;
})
