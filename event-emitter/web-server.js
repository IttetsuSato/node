const http = require('http');

const server = http.createServer();

// requestイベントのリスナーを登録
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  res.end();
});

// listeningイベントのリスナーを登録
server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

// errorイベントのリスナーを登録
server.on('error', (err) => {
  console.error('Error occurred:', err.message);
});

// closeイベントのリスナーを登録
server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000);