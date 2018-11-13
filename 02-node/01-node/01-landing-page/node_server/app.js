let http = require('http');
let fs = require('fs');

let server = http.createServer(function (request, response){
  console.log('client request URL: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', function (errors, contents){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/ninjas') {
    fs.readFile('ninja.html', 'utf8', function (errors, contents){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(contents);
      response.end();
    });
  } else if (request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf8', function (errors,contents){
      response.writeHead(200, { ' Content-Type': 'type/html' });
      response.write(contents);
      response.end();
    });
  } else {
    response.end('URL requested is not available');
  }
});

server.listen(6789);
