const CHAT_ACTIONS = require('./actions').CHAT_ACTIONS;

const sendMessageToChat = (socket, message) => {
  socket.emit(CHAT_ACTIONS.CHAT_MESSAGE, message);
};

module.exports = {
  sendMessageToChat,
};
