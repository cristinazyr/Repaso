"use strict";
/*
['Virginia', 'Jeannette', 'Yanru', 'Laura']
[
  ({ name: 'Virginia' },
  { name: 'Jeannette' },
  { name: 'Yanru' },
  { name: 'Laura' })
];
*/
const adalabers = [
  {
    name: "Jeannette",
    github: "jeannettearias",
    promo: "B",
    tutor: "Iván",
    location: "Barcelona",
    numberOfPets: 1,
  },
  {
    name: "Francheska",
    github: "francheskajcg",
    promo: "B",
    tutor: "Iván",
    location: "Madrid",
    numberOfPets: 5,
  },
  {
    name: "Victoria",
    github: "MVictoriaDoll",
    promo: "B",
    tutor: "Iván",
    location: "Neder-landen",
    numberOfPets: 1,
  },
  {
    name: "Laura",
    github: "laurarguezf",
    promo: "B",
    tutor: "Iván",
    location: "Madrid",
    numberOfPets: 2,
  },
  {
    name: "Ana",
    github: "aruiz982",
    promo: "B",
    tutor: "Iván",
    location: "Madrid",
    numberOfPets: 1,
  },
  {
    name: "Virginia",
    github: "virvilt",
    promo: "B",
    tutor: "Iván",
    location: "Málaga",
    numberOfPets: 1,
  },
  {
    name: "Yanru",
    github: "cristinazyr",
    promo: "B",
    tutor: "Iván",
    location: "Madrid",
    numberOfPets: 2,
  },
  {
    name: "Patricia",
    github: "PatriXcX",
    promo: "B",
    tutor: "Iván",
    location: "Lleida",
    numberOfPets: 0,
  },
  {
    name: "Alejandra",
    github: "alexlab84",
    promo: "B",
    tutor: "Iván",
    location: "Madrid",
    numberOfPets: 0,
  },
  {
    name: "Eva",
    github: "evasanzguerrero",
    promo: "B",
    tutor: "Iván",
    location: "Barcelona",
    numberOfPets: 1,
  },
  {
    name: "Dayana",
    github: "dayana",
    promo: "Z",
    tutor: "Isa",
    location: "Albacete",
    numberOfPets: 1,
  },
];
console.log(adalabers);
console.table(adalabers);

/* const adalabersDeBarna = [];
for (const adalaberObject of adalabers) {
  if (adalaberObject.location === "Barcelona") {
    adalabersDeBarna.push(adalaberObject);
  }
}
console.log(adalabersDeBarna);
 */

// FILTER
const adalabersDeBarna = adalabers.filter(
  (adalaberObject) => adalaberObject.location === "Barcelona",
);
console.log(adalabersDeBarna);

// MAP
const adalabersGitHubAccounts = adalabers.map(
  (adalaberObject) => adalaberObject.github,
);
console.log(adalabersGitHubAccounts);
//OTRO EJEMPLO
/* const numbers = [2, 5, 8, 10];
const doubledNumbers = numbers.map((number) => number * 2);
console.log({ numbers, doubledNumbers }); */
//OTRO EJEMPLO
/* const cities = [
  "Madrid",
  "Barcelona",
  "Lleida",
  "Málaga",
  "Córdoba",
  "Neterlands",
];
const citiesInUppercase = cities.map((city) => city.toUpperCase());

console.log({ cities, citiesInUppercase });
const cityToDelate = "Córdoba";
const position = cities.indexOf(cityToDelate);
console.log(position);
cities.splice(position, 1);
console.log(cities); */

// FINDINDEX
const adalaberNameToDelete = "Dayana";
//const position = adalabers.indexOf(adalaberNameToDelete);  // No se puede usar indexOf con un array de objetos
const position = adalabers.findIndex(
  (adalaberObject) => adalaberObject.name === adalaberNameToDelete,
);
console.log(position);

adalabers.splice(position, 1);

console.log(adalabers);

//FIND
const object = adalabers.find((adalaber) => adalaber.name === "Francheska");
object.promo = "C";

console.log(object);
