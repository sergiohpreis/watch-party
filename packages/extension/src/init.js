import * as iframe from './iframe';
import * as player from './player';
import { getStreamService } from './utils/streamService';

const start = () => {
  iframe.start(getStreamService());
  player.start(getStreamService());
};

start();
