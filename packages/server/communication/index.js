const server = require('../server');
const listeners = require('./listeners');
const emitters = require('./emitters');

const io = require('socket.io')(server);

const start = () => {
  io.on('connection', (socket) => {
    listeners.whenChatMessageReceived(socket, (msg) => {
      emitters.sendMessageToChat(socket, msg);
    });
  });
};

module.exports = {
  start,
};
