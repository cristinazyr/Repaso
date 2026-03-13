"use strict";
const form1 = document.querySelector(".js__form1");
const form2 = document.querySelector(".js__form2");

//Ejemplo de repetir con el número

for (let i = 0; i < 9; i++) {
  console.log(i);
  form1.innerHTML += `<input type="button" value="${i + 1}">`;
}
//Ejemplo de repedir con el texto con arrays
const adalabers = [
  "Ale",
  "Ana",
  "Eva",
  "Francheska",
  "Jeannette",
  "Laura",
  "Patri",
  "Victoria",
  "Virginia",
  "Yanru",
];

// con !adalabers detectamos si la variable es null o undefined
if (!adalabers || adalabers.length === 0) {
  form2.innerHTML += "No hay adalabers";
} else {
  for (let i = 0; i < adalabers.length; i++) {
    form2.innerHTML += `<input type="button" value="${adalabers[i]}">`;
  }
}

//Ejemplo más matemáticos
const numbers = [5, 7, 6, 9, 3, 6, 5];
let acumulador = 0;

//debugger;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  //acumulador = acumulador + numbers[i];
  acumulador += numbers[i];
}
console.log(acumulador);

// EJERCICIO DE LA MEDIA 1
/* 
const scores = [5, 7, 6];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

const average = sum / scores.length;
console.log("La media es: ", average); */

// EJERCICIO DE LA MEDIA 2
const adalabersScores = [
  { name: "MariCarmen", promo: "Betty", score: 5 },
  { name: "Amparo", promo: "Betty", score: 7 },
  { name: "Isa", promo: "Betty", score: 6 },
];

let sum = 0;

for (let i = 0; i < adalabersScores.length; i++) {
  const adalaberObject = adalabersScores[i];

  sum += adalaberObject.score;
  console.log(sum);
}
// for-of    for( const vari of array ) {}
sum = 0;
for (const adalaberObject of adalabersScores) {
  sum += adalaberObject.score;
  console.log(sum);
}

// Tambien funciona para array sensillos
/* const numbers2 = [5, 7, 6, 9, 3, 6, 5];

for( const number of numbers2) {
  console.log(number);
} */
