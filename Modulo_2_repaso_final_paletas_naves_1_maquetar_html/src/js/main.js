"use strict";

//QUERY SELECTOR
const palettesUl = document.querySelector(".js__paletesUl");
const favouritesUl = document.querySelector(".js__favouritesUl");
//DATOS
let data = [];
let favourites = [];
//FUNCIONES
function createLiforStarShip(oneObject) {
  let colorsHTML = "";
  for (let i = 0; i < oneObject.colors.length; i++) {
    colorsHTML += `<li class="color" style="background-color:#${oneObject.colors[i]}"></li>`;
  }
  const html = ` <li class="js__paletteCard paletteCard" data-id=${oneObject.id}>
            <h3>${oneObject.name}</h3>
            <ul class="colors">
${colorsHTML}
            </ul>
          </li>`;

  return html;
}

function renderStarShips() {
  let html = "";

  /* for (let i = 0; i < data.length; i++) {
  html += createLiforStarShip(data[i]);
} */
  for (const oneObject of data) {
    html += createLiforStarShip(oneObject);
  }
  palettesUl.innerHTML = html;
  const paletteAllCards = document.querySelectorAll(".js__paletteCard");
  for (const eachCardLi of paletteAllCards) {
    eachCardLi.addEventListener("click", handdleClickCard);
  }
}
function renderFavourites() {
  let html = "";
  for (const oneObject of favourites) {
    html += createLiforStarShip(oneObject);
  }
  favouritesUl.innerHTML = html;
}
//FUNCIONES DE EVENTOS
function handdleClickCard(ev) {
  const clickedPaletteId = ev.currentTarget.dataset.id;
  // Busca un obj en data que tenga el id=clickedPaletteId
  const clickedPaletteObj = data.find(
    (eachPaletteObj) => eachPaletteObj.id === clickedPaletteId,
  );
  //Busca un obj en favoritos que el id=clickedPaletteId me devuelve su posicion(index)
  const clickedFavouriteIndex = favourites.findIndex(
    (eachPaletteObj) => eachPaletteObj.id === clickedPaletteId,
  );
  if (clickedFavouriteIndex === -1) {
    favourites.push(clickedPaletteObj);
  }
  console.log(clickedPaletteObj);

  renderFavourites();
  /*  const clickedPaletteObj = data.find(
    (eachPaletteObj) => eachPaletteObj.id === clickedPaletteId,
  );
  const html = createLiforStarShip(clickedPaletteObj);
  favouritesUl.innerHTML += html;
  ev.currentTarget.classList.toggle("favourite"); */
}

//EVENTOS

//CÓDIGOS CUANDO CARGA LA PÁGINA

fetch(
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json",
)
  .then((response) => response.json())
  .then((dataFromFetch) => {
    console.log(dataFromFetch.palettes);
    data = dataFromFetch.palettes;
    renderStarShips();
  });
