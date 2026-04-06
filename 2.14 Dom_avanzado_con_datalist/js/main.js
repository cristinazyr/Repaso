"use strict";

const div = document.querySelector(".js__div");

console.log(div.dataset);

div.dataset.nuevo = "Holis!";

const main = document.querySelector(".js__main");

function createCromo(object) {
  // object = { name: '', image: '', description: ''}
  const list = document.querySelector(".js__list");

  // Crear <li>
  const cardLi = document.createElement("li");
  cardLi.classList.add("card");
  cardLi.classList.add("js__card");
  cardLi.dataset.id = object.id;

  // Crear <h2>
  const cardH2 = document.createElement("h2"); // Crear el elemento <h2>
  cardH2.classList.add("card__title"); // Poner una clase
  const cardH2text = document.createTextNode(object.name); // Crear el texto de dentro del <h2>
  cardH2.appendChild(cardH2text); // Añadir el texto como hija del <h2>
  cardLi.appendChild(cardH2); // Añadir el elemento <h2> como hija del <li>

  // Crear <img>

  const imgBill = document.createElement("img"); // imgBill <- <img >
  imgBill.src = object.image;
  imgBill.alt = "Foto de " + object.name;
  imgBill.classList.add("card__img");

  cardLi.appendChild(imgBill);

  // Crear <p>
  const paragraph = document.createElement("p");
  paragraph.classList.add("card__description");
  paragraph.appendChild(document.createTextNode(object.description));

  cardLi.appendChild(paragraph);

  list.appendChild(cardLi);
}

const data = [
  {
    id: 123,
    name: "Bill Murray",
    image: "./images/Bill-Murray.jpg",
    description: "Lorem, ipsum dolor sit",
  },
  {
    id: 512,
    name: "Bill Hoorray",
    image: "./images/Bill-Murray-bill-murray-13218847-500-691.jpeg",
    description: "Otra descript",
  },
];

const shoppingCart = [];

for (const oneBill of data) {
  createCromo(oneBill);
}

const allCards = document.querySelectorAll(".js__card");

for (const oneLi of allCards) {
  oneLi.addEventListener("click", handleClick);
}

function handleClick(ev) {
  console.log("Click!");
  console.log(ev.currentTarget);

  const clickedLi = ev.currentTarget;

  const clickedId = parseInt(clickedLi.dataset.id);
  console.log(clickedId);

  const object = data.find((oneObject) => oneObject.id === clickedId);
  console.log(object);

  shoppingCart.push(object);
}

/*
const oneBillMurray = {
  id: 123,
  name: 'Bill Murray',
  image: './images/Bill-Murray.jpg',
  description: 'Lorem, ipsum dolor sit'
};


createCromo(oneBillMurray);


const otherBillMurray = {
  id: 512,
  name: 'Bill Hoorray',
  image: './images/Bill-Murray-bill-murray-13218847-500-691.jpeg',
  description: 'Otra descript'
};


createCromo(otherBillMurray);
*/
