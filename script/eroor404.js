const image404 = document.querySelector('.gomer404');
const nextButton = document.querySelector('.next404');
const prevButton = document.querySelector('.prev404');

let arrHrefPage = ['index', 'updates', 'characters', 'homes', 'decors'];
let arrnamePage = ['Главная', 'Обновления', 'Персонажи', 'Дома', 'Декорации'];
let countButton = 0;

image404.addEventListener('mouseover', () => {

  const buttons = image404.querySelector('.button404').querySelectorAll('a');

  for(let button of buttons){

    button.classList.remove('displayFalse');
    image404.style.opacity = '0.7';

  }
});

image404.addEventListener('mouseout', () => {

  const buttons = image404.querySelector('.button404').querySelectorAll('a');

  for(let button of buttons){

    button.classList.add('displayFalse');
    image404.style.opacity = 0.9;

  }

});

nextButton.addEventListener('click', () => {
  const mainButton404 = document.querySelector('.mainButton404');

  if (countButton == arrHrefPage.length - 1){
    countButton = 0;
    mainButton404.innerHTML = arrnamePage[countButton];
    mainButton404.href = arrHrefPage[countButton];
  } else {
    countButton++;
    mainButton404.innerHTML = arrnamePage[countButton];
    mainButton404.href = arrHrefPage[countButton];
  }

});

prevButton.addEventListener('click', () => {
  const mainButton404 = document.querySelector('.mainButton404');

  if (countButton == 0){
    countButton = arrHrefPage.length - 1;
    mainButton404.innerHTML = arrnamePage[countButton];
    mainButton404.href = arrHrefPage[countButton];
  } else {
    countButton--;
    mainButton404.innerHTML = arrnamePage[countButton];
    mainButton404.href = arrHrefPage[countButton];
  }

});
