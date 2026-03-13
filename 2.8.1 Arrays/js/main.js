"use strict";

const adalaber = {
  nombre: "Maricarmen Salas",
  promo: "Betty",
};

adalaber.promo;

/* const adalabers = [
  "Ale",
  "Ana",
  "Eva",
  "Jeannette",
  "Laura",
  "Patri",
  "Victoria",
  "Yanru",
];

console.log(adalabers);
console.log(adalabers[0]);

console.log(adalabers[1]);
let posicion = 0;

console.log(adalabers[posicion]);

posicion++; // posicion = posicion + 1;
console.log(adalabers[posicion]);
posicion++; // posicion = posicion + 1;
console.log(adalabers[posicion]);

posicion++; // posicion = posicion + 1;
console.log(adalabers[posicion]);

posicion++; // posicion = posicion + 1;
console.log(adalabers[posicion]);

posicion++; // posicion = posicion + 1;
console.log(adalabers[posicion]);
 */
/* const adalabers = [
  "Ale",
  "Ana",
  "Eva",
  "Jeannette",
  "Laura",
  "Patri",
  "Victoria",
  "Yanru",
];
console.log(adalabers);
adalabers[0] = "Alejandra";
adalabers[5] = "Patricia";
adalabers[8] = "Ivanico";
// adalabers[100] = 'MariCarmen'; --> Caca

console.log(adalabers);
console.log(adalabers.length);

const miArray = [];

if (miArray.length === 0) {
  console.log("Está vacío");
} else {
  console.log("Tiene cosas");
}

if (adalabers[0] === "Ale") {
  console.log("Lo ha cambiado malamente!");
} else {
  console.log("Lo ha cambiado al nombre más formal.");
} */
//adalabers.slice(0, 2)

//const posicionDeLaura = adalabers.indexOf('Laura');
//console.log(posicionDeLaura);

const nameSpan = document.querySelector(".js__nameSpan");

const adalabers = [
  { nombre: "Ale", mascotas: 1 },
  { nombre: "Ana", mascotas: 3 },
  { nombre: "Eva", mascotas: 0 },
  { nombre: "Jeannette", mascotas: 1 },
  { nombre: "Laura", mascotas: 1 },
  { nombre: "Patri", mascotas: 2 },
  { nombre: "Victoria", mascotas: 1 },
  { nombre: "Yanru", mascotas: 0 },
];
console.log(adalabers[0]);
console.log(adalabers[2].mascotas);
nameSpan.innerHTML = adalabers[0].nombre;

const numMascotas =
  adalabers[0].mascotas +
  adalabers[1].mascotas +
  adalabers[2].mascotas +
  adalabers[3].mascotas +
  adalabers[4].mascotas +
  adalabers[5].mascotas +
  adalabers[6].mascotas +
  adalabers[7].mascotas;
console.log(numMascotas);

//Ejemplo de dentro de objetivo, son los arrays
const materiales = {
  lecciones: ["Intro a programación", "Eventos", "Condicionales"],
  ejercicios: ["Gazpacho", "Cesta de peras", "Adakitten"],
  //               [0]            [1]            [2]
  proyectos: ["About us", "Awesome profile cards"],
};
elemento.innerHTML = materiales.ejercicios[1];
