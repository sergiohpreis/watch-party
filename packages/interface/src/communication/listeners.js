import socket from './index';
import { CHAT_ACTIONS } from './actions';

export const whenChatMessageArrive = (cb) =>
  socket.on(CHAT_ACTIONS.CHAT_MESSAGE, (msg) => {
    cb(msg);
  });
