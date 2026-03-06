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

function renderDog(image, name) {
  dogUl.innerHTML += `
              <li class="card">
                <h2 class="card__title">${name}</h2>
                <img src="${image}" alt="Foto del perrico ${name}">
              </li>`;
}
// SECCIÓN DE FUNCIONES DE EVENTOS

// SECCIÓN CUANDO CARGA LA PÁGINA

renderDog(
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg",
  "Dina",
);

renderDog(
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg",
  "Luna",
);

renderDog(dog_2_image, dog_2_name);
