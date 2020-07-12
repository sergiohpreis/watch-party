const server = require('./server.js');
const communication = require('./communication');

communication.start();

server.listen(5000, () => {
  console.log('Listening on 5000');
});
