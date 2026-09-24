const http = require('node:http');

http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');

  if (request.url === '/users') {
    response.writeHead(
      200,
      { 'content-type': 'application/json' }
    );
    response.end(JSON.stringify([{
      name: 'Alex Bessa',
      email: 'alex@email.com'
    }, {
      name: 'Renan França',
      email: 'Renan@email.com'
    },
    {
      name: 'Renê França',
      email: 'Renê@email.com'
    }]));
    return;

  }
  if (request.url === '/products') {
    response.writeHead(
      200,
      { 'content-type': 'application/json' }
    );
    response.end(JSON.stringify([{
      produto: 'notebook',
      valor: '10.000'
    }, {
      produto: 'Iphone',
      valor: '7.200'
    },
    {
      produto: 'tablet',
      valor: '3.500'
    }]));
    return;
  }
  response.writeHead(
    404,
    { 'content-type': 'aplication/json' }
  );
  response.end(JSON.stringify({ message: 'Não Existente.' }));
  return;

}).listen(3000);