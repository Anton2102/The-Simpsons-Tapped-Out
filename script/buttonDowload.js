'use strict'

const buttonsDownload = document.querySelectorAll('.buttonDowload');

for(let button of buttonsDownload) {
  button.addEventListener('mouseover', () => {

    button.style.backgroundSize = "100%";

    button.addEventListener('mouseout', () => {
      button.style.backgroundSize = "80%";
    });

  });
}
