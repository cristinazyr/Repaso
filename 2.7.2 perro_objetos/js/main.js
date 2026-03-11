"use strict";
const dogsUl = document.querySelector(".js__dogsUl");

/* const dog_0_image =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const dog_0_name = "Dina";
const dog_0_desciption =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const dog_0_breed = "Mixed"; */

const dog0 = {
  image: "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg",
  name: "Dina",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  breed: "Mixed",
};

/* const dog_1_image =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const dog_1_name = "Luna";
const dog_1_desciption =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const dog_1_breed = ""; */
const dog1 = {
  image: "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg",
  name: "Luna",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  breed: "Mixed",
};

/* const dog_2_image =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const dog_2_name = "Lana";
const dog_2_desciption =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
const dog_2_breed = "";
 */
const dog2 = {
  image: "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg",
  name: "Lana",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  breed: "",
};
/* dogsUl.innerHTML = `<li class='card'>
<h2 class='card__title'>${dog_0_name}</h2>
<img src=${dog_0_image} alt='Foto de ${dog_0_name}'></li>`;

dogsUl.innerHTML += `<li class='card'>
<h2 class='card__title'>${dog_0_name}</h2>
<img src=${dog_1_image} alt='Foto de ${dog_1_name}'></li>`;

dogsUl.innerHTML += `<li class='card'>
<h2 class='card__title'>${dog_2_name}</h2>
<img src=${dog_2_image} alt='Foto de ${dog_2_name}'></li>`; */

// Hacer con function
function renderDogLi(objDog) {
  /*
    objDog = {
      'name': ''
      'image': ''
      'description': ''
      'breed': ''
    }
  */
  const html = `<li class='card'>
<h2 class='card__title'>${objDog.name}</h2>
<img src=${objDog.image} alt='Foto de ${objDog.name}'></li>`;
  return html;
}
let html = renderDogLi(dog0);
html += renderDogLi(dog1);
html += renderDogLi(dog2);

dogsUl.innerHTML = html;

// Hacer con arrow
/* const renderDogLi = (objDog) => {
  return `<li class='card'>
<h2 class='card__title'>${objDog.name}</h2>
<img src=${objDog.image} alt='Foto de ${objDog.name}'></li>`;
};

let html = renderDogLi(dog0);
html += renderDogLi(dog1);
html += renderDogLi(dog2);

dogsUl.innerHTML = html; */
