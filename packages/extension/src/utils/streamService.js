export const getStreamService = () => {
  if (window.location.href.indexOf('netflix.com')) {
    return 'netflix';
  }
};
