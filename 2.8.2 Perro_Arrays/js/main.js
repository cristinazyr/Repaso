"use strict";
// SECCIÓN DE QUERY-SELECTOR

const dogsUl = document.querySelector(".js__dogsUl");
const favouriteBreedSpan = document.querySelector(".js__favouriteBreedSpan");
// SECCIÓN DE DATOS

const dogs = [
  {
    image: "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg",
    name: "Dina",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    breed: "Chiuaua",
  },
  {
    image: "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg",
    name: "Luna",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    breed: "Mixed",
  },
  {
    image: "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg",
    name: "Lana",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    breed: "",
  },
];
// FUNCIONES

/**
 * Esta función recibe un objeto como parámetro con los datos del perro a mostrar.
 * Genera un elemento <li> con la información a representar.
 * Devuelve el <li> ya formado.
 *
 */

function renderDogLi(objDog) {
  /*
    objDog = {
      'name': ''
      'image': ''
      'breed': ''
      'description': ''
    }
  */

  const html = `
      <li class="card">
        <h2 class="card__title">${objDog.name}</h2>
        <img src="${objDog.image}" alt="Foto de ${objDog.name}">
        <p className="card__description">${objDog.description}</p>
      </li>`;

  return html;
}
let html = renderDogLi(dogs[0]);
html += renderDogLi(dogs[1]);
html += renderDogLi(dogs[2]);

dogsUl.innerHTML = html;
favouriteBreedSpan.innerHTML = dogs[1].breed;
