"use strict";
const main = document.querySelector(".js__main");

// DOM avanzado

const list = document.querySelector(".js__list");

// Crear <li>
const cardLi = document.createElement("li");
cardLi.classList.add("card");

// Crear <h2>
const cardH2 = document.createElement("h2"); // Crear el elemento <h2>
cardH2.classList.add("card__title"); // Poner una clase
const cardH2text = document.createTextNode("Bill Murray"); // Crear el texto de dentro del <h2>
cardH2.appendChild(cardH2text); // Añadir el texto como hija del <h2>
cardLi.appendChild(cardH2); // Añadir el elemento <h2> como hija del <li>

// Crear <img>
//main.innerHTML = `<img src="./images/Bill-Murray.jpg" alt="Foto de Bill Murray" >`;

const imgBill = document.createElement("img"); // imgBill <- <img >
imgBill.src = "./images/Bill-Murray.jpg";
imgBill.alt = "Foto de Bill Murray";
imgBill.classList.add("card__img");

cardLi.appendChild(imgBill);

// Crear <p>
const paragraph = document.createElement("p");
paragraph.classList.add("card__description");
paragraph.appendChild(document.createTextNode("Lorem, ipsum dolor sit"));

cardLi.appendChild(paragraph);

list.appendChild(cardLi);
/*
const list1 = document.querySelector('.list');
const allLists = document.querySelectorAll('.list');

const list = main.querySelector('.list');

//  -----

const applesTitle = document.querySelector('.js__title');

const elem = applesTitle.closest('.list')

console.log(elem);

// ----

const allButtons = document.querySelectorAll('.js__btn');


function handleClick(ev) {
  const clickedBtn = ev.currentTarget;

  const clickedCard = clickedBtn.closest('.card');

  const clickedH2 = clickedCard.querySelector('h2');

  console.log(clickedH2.innerHTML);
}


for( const btn of allButtons ) {
  btn.addEventListener( 'click', handleClick );
}

*/
