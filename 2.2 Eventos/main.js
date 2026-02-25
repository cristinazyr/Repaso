"use strict";
// Cuando la usuaria haga click en el botón hamb, al ul de menu__list se le añada la clase visible para que se muestre

const menuBtn = document.querySelector(".js__menuBtn");
const menuList = document.querySelector(".js__menuList");

menuBtn.addEventListener("click", (ev) => {
  /*  menuList.classList.add("visible");
  menuList.classList.remove("visible"); */
  menuList.classList.toggle("visible");
});

// Cuando la usuaria escriba en el input del nombre, que se rellene en la carta detrás del hola

const nameInput = document.querySelector(".js__nameInput");

const firstParagraph = document.querySelector(".js__firstParagraph");

nameInput.addEventListener("input", (ev) => {
  const name = nameInput.value;
  const greeting = "Hola " + name + "!";
  firstParagraph.innerHTML = greeting;
});
// Cuando la usuaria escriba en el input de la dirección, que se rellene en la carta dentro del tercer párrafo
const addressInput = document.querySelector(".js__addressInput");
const thirdParagraph = document.querySelector(".js__thirdParagraph");

addressInput.addEventListener("input", (ev) => {
  const adress = addressInput.value;
  const adressInfo = adress;
  thirdParagraph.innerHTML = adressInfo;
});

// Evento mouse
const headerElement = document.querySelector(".header");
headerElement.addEventListener("mouseover", (ev) => {
  console.log("Hace un mouse hover");
});
headerElement.addEventListener("mouseenter", (ev) => {
  console.log("Hace un mouse enter");
});
