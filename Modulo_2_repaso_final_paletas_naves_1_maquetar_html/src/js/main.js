"use strict";

//QUERY SELECTOR
const palettesUl = document.querySelector(".js__paletesUl");
const favouritesUl = document.querySelector(".js__favouritesUl");
const searchButton = document.querySelector(".js__searchButton");
const paletteInput = document.querySelector(".js__paletteInput");
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

function renderStarShips(vari) {
  let html = "";

  /* for (let i = 0; i < data.length; i++) {
  html += createLiforStarShip(data[i]);
} */
  for (const oneObject of vari) {
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
    localStorage.setItem("favs", JSON.stringify(favourites));

    renderFavourites();
  } else {
    // quitar el array de favourites
    favourites.splice(clickedFavouriteIndex, 1);
    localStorage.setItem("favs", JSON.stringify(favourites));
    renderFavourites();
    /*  const clickedPaletteObj = data.find(
    (eachPaletteObj) => eachPaletteObj.id === clickedPaletteId,
  );
  const html = createLiforStarShip(clickedPaletteObj);
  favouritesUl.innerHTML += html;
  ev.currentTarget.classList.toggle("favourite"); */
  }
  ev.currentTarget.classList.toggle("favourite");
}

function handleClickSearch(ev) {
  ev.preventDefault();

  const searchedPalette = paletteInput.value;
  console.log(searchedPalette);

  const filteredData = data.filter((eachPaletteObj) =>
    eachPaletteObj.name.toLowerCase().includes(searchedPalette.toLowerCase),
  );
  renderStarShips(filteredData);
  /*
  fetch(`https://swapi.dev/api/people/?search=${searchedPalette}`)
    .then(response => response.json())
    .then(dataFromOtherFetch => {
      data = dataFromOtherFetch.palettes;

      renderStarships();
    })
  */
}

//EVENTOS
searchButton.addEventListener("click", handleClickSearch);

//CÓDIGOS CUANDO CARGA LA PÁGINA

fetch(
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json",
)
  .then((response) => response.json())
  .then((dataFromFetch) => {
    console.log(dataFromFetch.palettes);
    data = dataFromFetch.palettes;
    renderStarShips(data);
  });

const favsFromLS = JSON.parse(localStorage.getItem("favs"));

if (favsFromLS !== null) {
  favourites = favsFromLS;

  renderFavourites();
}
