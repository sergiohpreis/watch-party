export default () =>
  window.addEventListener(
    'message',
    (event) => {
      const messageByEventType = {
        VIDEO_PLAYED: () =>
          window.top.postMessage(
            {
              type: 'PLAY_VIDEO',
            },
            '*'
          ),
      };

      return messageByEventType[event.data.type]();
    },
    true
  );
