module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', (currentLikes) => {
    console.log(currentLikes);
    const likeNumber = parseInt(currentLikes) + 1;

    io.emit('updateLike', likeNumber.toString());
  })
});
