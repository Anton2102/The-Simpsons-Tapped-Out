let buttonShowTask = document.querySelectorAll('.buttonShowTask');

// console.log(buttonShowTask);
for(let button of buttonShowTask){
  button.addEventListener('click', () => {

    if (button.children[1].classList == 'showDialogueFalse'){
      button.children[1].classList = 'showDialogueTrue';
    } else {
      button.children[1].classList = 'showDialogueFalse';
    }
    // console.log(button);

  });
}
