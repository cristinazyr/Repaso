"use strict";

const card = document.querySelector(".js__card");

const paragraph = card.querySelector(".card__description");

// Para quitar un elemento hija:

card.removeChild(paragraph);
// forma de arrriba, o directamente remove de abajo
paragraph.remove();

// Para quitar todas las hijas:

card.innerHTML = "";
