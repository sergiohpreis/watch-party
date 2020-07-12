const CHAT_ACTIONS = require('./actions').CHAT_ACTIONS;

const whenChatMessageReceived = (socket, cb) =>
  socket.on(CHAT_ACTIONS.CHAT_MESSAGE, (msg) => {
    cb(msg);
  });

module.exports = {
  whenChatMessageReceived,
};
