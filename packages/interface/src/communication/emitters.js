import socket from './index';
import { CHAT_ACTIONS } from './actions';

export const sendMessageToChat = (message) => {
  socket.emit(CHAT_ACTIONS.CHAT_MESSAGE, message);
};
