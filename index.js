'use strict'

const http = require('http');
const fs = require('fs');

// Запуск сайта по адресу ( http://localhost:8888 ).
http.createServer( (request, response) => {
  if (request.url != 'favicon.ico') {

    if (request.url.endsWith('.css')) {
      let cssFile = request.url.slice(1);
      fs.readFile(cssFile, (err, data) => {
        if (err) throw err;

        response.setHeader('Content-Type', 'text/css');
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else if (request.url.endsWith('.js')) {
      let jsFile = request.url.slice(1);
      fs.readFile(jsFile, (err, data) => {
        if (err) throw err;

        response.setHeader('Content-Type', 'text/javascript');
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else if (request.url.endsWith('.jpg')) {
      let imgFile = request.url.slice(1);
      fs.readFile(imgFile, (err, data) => {
        if (err) throw err;

        response.setHeader('Content-Type', 'image/jpg');
        response.statusCode = 200;
        response.write(data);
        response.end();
      });

    } else {
      getPage(request.url, response);
    }

  }
}).listen(8888);

function getPage(name, response, statusCode = 200) {
  if (name == '/'){
    name = 'index';
  }

  fs.readFile('pages/' + name + '.html', 'utf8', (err, data) => {
    // if (err) throw err;
    if (!err) {
      response.setHeader('Content-Type', 'text/html');
      response.statusCode = statusCode;
      response.write(data);
      response.end();
    } else {
      if (name != '404'){
        getPage('404', response, 404);
      } else {
        throw err;
      }
    }
  });
}
