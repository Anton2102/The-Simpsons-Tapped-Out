// За этот модуль больше всего стыдно.
// Пока у меня не придумается ка решить проблему с вложенностью, тут будет вечная вложенность!

'use strict'
const fs = require('fs');

function getPage(name, response, statusCode = 200) {
  if (name == '/'){
    name = 'index';
  }

  fs.readFile('pages/' + name + '.html', 'utf8', (err, data) => {

    if (!err) {

      // 1 уровень - ЭЛЕМЕНТЫ НА ВСЕХ СТРАНИЦАХ.
      // ------------------------------------------------------------------

      // Основыные элементы страницы!
      // ссылки в header.
      fs.readFile('elems/linksHeader.html', 'utf8', (err, linksHeader) => {
        if (err) throw err;

        data = data.replace(/\{\{linksHeader\}\}/g, linksHeader);

        // меню.
        fs.readFile('elems/menu.html', 'utf8', (err, menu) => {
          if (err) throw err;

          data = data.replace(/\{\{menu\}\}/g, menu);

          // footer.
          fs.readFile('elems/footer.html', 'utf8', (err, footer) => {
            if (err) throw err;

            data = data.replace(/\{\{footer\}\}/g, footer);

            // блок ссылок на закгрузку игры.
            fs.readFile('elems/download.html', 'utf8', (err, download) => {
              if (err) throw err;

              data = data.replace(/\{\{download\}\}/g, download);


              // 2 уровень - ОТДЕЛЬНЫЕ СТРАНИЦЫ.
              // -----------------------------------------------------------------

              // Страница "Персонажи"!
              fs.readFile('elems/charactersElems.html', 'utf8', (err, charactersElems) => {
                if (err) throw err;

                data = data.replace(/\{\{charactersElems\}\}/g, charactersElems);

                // Коллекция семьи Симпсонов.
                fs.readFile('elems/characters/simpsons.html', 'utf8', (err, simpsons) => {
                  if(err) throw err;

                  data = data.replace(/\{\{charactersSimpsons\}\}/g, simpsons);

                  // Коллекция семьи Ван Хутэнов
                  fs.readFile('elems/characters/vanxytens.html', 'utf8', (err, vanxytens) => {
                    if(err) throw err;

                    data = data.replace(/\{\{charactersVanxytens\}\}/g, vanxytens);

                    // Коллекция семьи Апу
                    fs.readFile('elems/characters/apys.html', 'utf8', (err, apys) => {
                      if(err) throw err;

                      data = data.replace(/\{\{charactersApys\}\}/g, apys);

                      // Коллекция семьи Фландерсов
                      fs.readFile('elems/characters/flanders.html', 'utf8', (err, flanders) => {
                        if(err) throw err;

                        data = data.replace(/\{\{charactersFlanders\}\}/g, flanders);

                        // Семья Бубье
                        fs.readFile('elems/characters/bubes.html', 'utf8', (err, bubes) => {
                          if(err) throw err;

                          data = data.replace(/\{\{charactersBubes\}\}/g, bubes);

                          // Школные работники
                          fs.readFile('elems/characters/workshcool.html', 'utf8', (err, workShcool) => {
                            if(err) throw err;

                            data = data.replace(/\{\{charactersWorkShcool\}\}/g, workShcool);

                            response.setHeader('Content-Type', 'text/html');
                            response.statusCode = statusCode;
                            response.write(data);
                            response.end();

                          });
                        });

                      });
                    });
                  });


                });

              });

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

exports.getPage = getPage;
