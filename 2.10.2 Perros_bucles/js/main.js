"use strict";

// SECCIÓN DE QUERY-SELECTOR

const dogsUl = document.querySelector(".js__dogsUl");
const favouriteBreedSpan = document.querySelector(".js__favouriteBreedSpan");

const btn = document.querySelector(".js__btn");

const nameInput = document.querySelector(".js__name");
const imageInput = document.querySelector(".js__image");
const descInput = document.querySelector(".js__desc");
const breedInput = document.querySelector(".js__breed");

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
  {
    image:
      "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_876,h_800/https://lahuellarosa.es/wp-content/uploads/2021/09/muda-pelo-876x800.jpg",
    name: "Lolo",
    description: "Nuevo perro.",
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
  const html = `
      <li class="card">
        <h2 class="card__title">${objDog.name}</h2>
        <img src="${objDog.image}" alt="Foto de ${objDog.name}">
        <p className="card__description">${objDog.description}</p>
      </li>`;

  return html;
}

function renderAllDogs() {
  let html = "";

  /*
    let html = renderDogLi( dogs[0] );
    html += renderDogLi( dogs[1] );
    html += renderDogLi( dogs[2] );
  */

  /*   for( const dogObj of dogs ) {
    html += renderDogLi( dogObj );
  } */

  dogs.forEach((dogObj) => {
    html += renderDogLi(dogObj);
  });

  dogsUl.innerHTML = html;
}

// SECCIÓN EVENTOS

function handleClickBtn(ev) {
  ev.preventDefault();

  const newDog = {
    name: nameInput.value,
    image: imageInput.value,
    description: descInput.value,
    breed: breedInput.value,
  };

  console.log(dogs);

  dogs.push(newDog);

  console.log(dogs);

  renderAllDogs();

  /*
  const html = renderDogLi(newDog);
  dogsUl.innerHTML += html;
*/
}

btn.addEventListener("click", handleClickBtn);

// SECCIÓN CUANDO CARGA LA PÁGINA

// Ponemos todos los cromos de perros en la página:

renderAllDogs();

// Buscamos la raza de nuestro perro favorito:

favouriteBreedSpan.innerHTML = dogs[1].breed;
