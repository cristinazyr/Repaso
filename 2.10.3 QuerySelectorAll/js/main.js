"use strict";

const displayInput = document.querySelector(".js__display");

const buttonsArray = document.querySelectorAll(".js__btn");
console.log(buttonsArray);

for (const button of buttonsArray) {
  button.addEventListener("click", (ev) => {
    console.log("Has pulsado el ", ev.currentTarget.value);
    displayInput.value += ev.currentTarget.value;
  });
}
/*
// FORMA DIFICIL

const buttonsDiv = document.querySelector('.js__buttons');

buttonsDiv.addEventListener('click', (ev) => {
  console.log('Has hecho click');
  console.log('ev.currentTarget', ev.currentTarget);  // ev.currentTarget === buttonsDiv
  console.log('ev.target', ev.target);

  displayInput.value += ev.target.value;

});
*/
