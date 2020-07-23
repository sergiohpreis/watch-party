import * as iframe from './iframe';
import * as player from './player';
import { getStreamService } from './utils/streamService';

const start = () => {
  const streamService = getStreamService();
  console.log('Stream service', streamService);
  iframe.start(getStreamService());
  player.start(getStreamService());
};

start();
