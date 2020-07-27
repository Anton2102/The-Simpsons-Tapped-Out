'use strict'

const http = require('http');
const fs = require('fs');

// Запуск сайта по адресу ( http://localhost:8888 ).
http.createServer( (request, response) => {
  if (request.url != '/favicon.ico'){

    if (request.url.endsWith('.css')) {
      getOtherFile(request.url.slice(1), 'text/css', response);
    } else if (request.url.endsWith('.js')) {
      getOtherFile(request.url.slice(1), 'text/javascript', response);
    } else if (request.url.endsWith('.jpg')) {
      getOtherFile(request.url.slice(1), 'image/jpg', response);
    } else {
      getPage(request.url, response);
    }
  }
}).listen(8888);

function getOtherFile(file, format, response){

  fs.readFile(file, (err, data) => {
    if (err) throw err;

    response.setHeader('Content-Type', format);
    response.statusCode = 200;
    response.write(data);
    response.end();
  });

}

function getPage(name, response, statusCode = 200) {
  if (name == '/'){
    name = 'index';
  }

  fs.readFile('pages/' + name + '.html', 'utf8', (err, data) => {

    if (!err) {

      fs.readFile('elems/linksHeader.html', 'utf8', (err, linksHeader) => {
        if (err) throw err;

        data = data.replace(/\{\{linksHeader\}\}/g, linksHeader);

        fs.readFile('elems/menu.html', 'utf8', (err, menu) => {
          if (err) throw err;

          data = data.replace(/\{\{menu\}\}/g, menu);

          fs.readFile('elems/main.html', 'utf8', (err, main) => {
            if (err) throw err;

            data = data.replace(/\{\{main\}\}/g, main);

            fs.readFile('elems/footer.html', 'utf8', (err, footer) => {
              if (err) throw err;

              data = data.replace(/\{\{footer\}\}/g, footer);

              response.setHeader('Content-Type', 'text/html');
              response.statusCode = statusCode;
              response.write(data);
              response.end();
            });

          });

        });

      });
    } else {

      if (name != '404'){
        getPage('404', response, 404);
      } else {
        throw err;
      }

    }
  });

}
