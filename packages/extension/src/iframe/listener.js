export default () => {
  window.addEventListener('message', (event) => {
    const actionByEventType = {
      PLAY_VIDEO: () => {
        console.log('Play video if not playing');
      },
    };

    return actionByEventType[event.data.type]();
  });
};
