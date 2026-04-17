"use strict";

//QUERY SELECTOR
const palettesUl = document.querySelector(".js__paletesUl");
//DATOS
let data = [];
//FUNCIONES
function createLiforStarShip(oneObject) {
  let colorsHTML = "";
  for (let i = 0; i < oneObject.colors.length; i++) {
    colorsHTML += `<li class="color" style="background-color:#${oneObject.colors[i]}"></li>`;
  }
  const html = ` <li class="paletteCard">
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
}

//FUNCIONES DE EVENTOS

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
