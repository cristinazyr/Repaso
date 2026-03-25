"use strict";

const charactesUl = document.querySelector(".js__taskUl");
const searchInput = document.querySelector(".js__searchInput");
const searchButton = document.querySelector(".js__searchBtn");

let characters = [];

function generateOneCharacter(character) {
  const html = `
    <li class="card">
      <h3 class="card__title">${character.name}</h3>
    </li>
  `;
  return html;
}

function renderAllCharacters(characterList) {
  let html = "";

  for (const character of characterList) {
    html += generateOneCharacter(character);
  }

  charactesUl.innerHTML = html;
}

//https://swapi.dev/api/people/?search=r2

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => {
    characters = data.results;

    renderAllCharacters(characters);
  });

function handleClickSeach(ev) {
  ev.preventDefault();

  const searchWord = searchInput.value;

  fetch("https://swapi.dev/api/people/?search=" + searchWord)
    .then((response) => response.json())
    .then((data) => {
      characters = data.results;

      renderAllCharacters(characters);
    });
}

searchButton.addEventListener("click", handleClickSeach);
