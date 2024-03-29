const http = require('http');
const app = require('./src/app');

const normalizePort = require('./src/utils/normalize-port');

const port = normalizePort(process.env.PORT || '5000');

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;

    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.info(`Listening on ${bind}`);
  console.log(
    '---------------------------------------------------------------------'
  );
  console.log('Time : ' + new Date());
  console.log(
    '-----------------------------Current Environment Name -------------------------------------------------- '
  );
  console.log('Book Management Server Up');

  console.log(
    '------------------------------------------------------------------------------------------------------------------------------'
  );
}
