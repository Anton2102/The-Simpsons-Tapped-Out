// модуль для чтения файлов типа .js .css и т.д
'use strict'

const fs = require('fs');

function getOtherFile(file, format, response){

  fs.readFile(file, (err, data) => {
    if (err) throw err;

    response.setHeader('Content-Type', format);
    response.statusCode = 200;
    response.write(data);
    response.end();
  });

}

exports.getOtherFile = getOtherFile;
