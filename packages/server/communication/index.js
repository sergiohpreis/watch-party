const server = require('../server');
const listeners = require('./listeners');
const emitters = require('./emitters');

const io = require('socket.io')(server);

const start = () => {
  io.on('connection', (socket) => {
    listeners.whenChatMessageReceived(socket, (message) => {
      emitters.sendMessageToChat(io, message);
    });
  });
};

module.exports = {
  start,
};
