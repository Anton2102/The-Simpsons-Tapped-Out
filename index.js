'use strict'

const http = require('http');
const fs = require('fs');

const readFile = require('./getOtherFile');
const readPage = require('./getPages');

// Запуск сайта по адресу ( http://localhost:8888 ).
http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){

    if (request.url.endsWith('.css')) {
      readFile.getOtherFile(request.url.slice(1), 'text/css', response);
    } else if (request.url.endsWith('.js')) {
      readFile.getOtherFile(request.url.slice(1), 'text/javascript', response);
    } else if (request.url.endsWith('.jpg')) {
      readFile.getOtherFile(request.url.slice(1), 'image/jpg', response);
    } else if (request.url.endsWith('.png')) {
      readFile.getOtherFile(request.url.slice(1), 'image/png', response);
    } else if(request.url.endsWith('.js')){
      readFile.getOtherFile(request.url.slice(1), 'text/javascript', response);
    }else {
      readPage.getPage(request.url, response);
    }
  }
}).listen(8888);
