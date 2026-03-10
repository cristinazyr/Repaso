"use strict";

// SECCIÓN QUERY-SELECTOR

const dogUl = document.querySelector(".js__dogUl");

// SECCIÓN DE DATOS

const dog_0_image =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const dog_0_name = "Dina";

const dog_1_image =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const dog_1_name = "Luna";

const dog_2_image =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const dog_2_name = "Lana";

// SECCIÓN DE FUNCIONES

/*
function pintarPerroDeAntes() {
  dogUl.innerHTML += `<li class="card">${dog_0_name} <img src="${dog_0_image}" alt="${dog_0_name}"></li>`;
}
*/

/*
const pintarPerro = ( pepino, tomate ) => {
  dogUl.innerHTML += `
    <li class="card">
      <h2 class="card__title">${pepino}</h2>
      <img class="card__image" src="${tomate}" alt="${pepino}">
    </li>`;
};
*/

const generarHTMLPerro = (pepino, tomate) => {
  return `
    <li class="card">
      <h2 class="card__title">${pepino}</h2>
      <img class="card__image" src="${tomate}" alt="${pepino}">
    </li>`;
};

let html = generarHTMLPerro(dog_0_name, dog_0_image);

html += generarHTMLPerro(dog_1_name, dog_1_image);

html += generarHTMLPerro(dog_2_name, dog_2_image);

html += generarHTMLPerro(dog_0_name, dog_0_image);

html += generarHTMLPerro(dog_1_name, dog_1_image);

html += generarHTMLPerro(dog_2_name, dog_2_image);

dogUl.innerHTML = html;

/*
dogUl.innerHTML += `<li class="card">${dog_1_name} <img src="${dog_1_image}" alt="${dog_1_name}"></li>`;
dogUl.innerHTML += `<li class="card">${dog_2_name} <img src="${dog_2_image}" alt="${dog_2_name}"></li>`;
*/

// SECCIÓN DE FUNCIONES DE EVENTOS

// SECCIÓN CUANDO CARGA LA PÁGINA

/* 
dogUl.innerHTML += `
              <li class="card">
                <h2 class="card__title">${dog_0_name}</h2>
                <img src="${dog_0_image}" alt="Foto del perrico ${dog_0_name}">
              </li>`;

dogUl.innerHTML += `
              <li class="card">
                <h2 class="card__title">${dog_1_name}</h2>
                <img src="${dog_1_image}" alt="Foto del perrico ${dog_1_name}">
              </li>`;

dogUl.innerHTML += `
              <li class="card">
                <h2 class="card__title">${dog_1_name}</h2>
                <img src="${dog_1_image}" alt="Foto del perrico ${dog_1_name}">
              </li>`;
 */
