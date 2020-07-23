'use strict'

const http = require('http');
const fs = require('fs');

// Запуск сайта по адресу ( http://localhost:8888 ).
http.createServer( (request, response) => {
  if (request.url != 'favicon.ico') {
    response.writeHeader(200, {'Content-Type': 'text.html'});
    response.write('test start!');
    response.end();
  }
}).listen(8888);
