import * as netflixPlayer from './netflix';

export const start = (streamService) => {
  const startByStreamService = {
    netflix: () => {
      netflixPlayer.startListeners();
    },
  };

  return startByStreamService[streamService]();
};
