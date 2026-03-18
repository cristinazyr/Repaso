"use strict";

const ul = document.querySelector(".js__ul");

const numbers = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

// PUSH

console.log("Ejemplos PUSH");

numbers.push("seis"); // Modifica el array original
numbers.push("siete", "ocho", "nueve");

const ultimoElemento = numbers.pop(); // Saca un elemento del final del array (sacará el nueve)

console.log(numbers);

numbers.unshift("menos uno"); // Agrega al inicio del array (añade 'menos uno')
const primerElemento = numbers.shift(); // Saca un elemento del inicio del array (saca 'menos uno' y se queda como estaba)

console.log(numbers);

/*
// FOR-EACH

/*
// For clásico:

for( let i=0; i<numbers.length; i++ ) {
  ul.innerHTML += `<li>${ numbers[i] }</li>`;
}
*/
/*
// For clásico con una variable para "simplificar"

for( let i=0; i<numbers.length; i++ ) {
  const num = numbers[i];

  ul.innerHTML += `<li>${ num }</li>`;
}
*/
/*
// For-of

for (const num of numbers) {
  ul.innerHTML += `<li>${ num }</li>`;
}
*/
// ForEach

numbers.forEach((num) => {
  // No modifica el array original
  ul.innerHTML += `<li>${num}</li>`;
});

// SORT

console.log("Ejemplos SORT");

numbers.sort(); // Modifica el array original

console.log(numbers);

const digits = [4, 2, 5, 3, 6, 1, 3];

digits.sort().reverse();

console.log(digits);

// CONCAT

console.log("Ejemplos CONCAT");

const numbers2 = ["seis", "siete", "ocho", "nueve", "diez"];
const numbers3 = ["once", "doce", "trece", "catorce", "quince"];

const allNumbers = numbers.concat(numbers2, numbers3); // NO modifica el array original

console.log(numbers);
console.log(allNumbers);

// REVERSE

console.log("Ejemplos REVERSE");

numbers.reverse(); // Modifica el array original

console.log(numbers);

// SPLICE

console.log("Ejemplos SPLICE");
console.log(numbers);

//numbers.splice(1, 3);  // Modifica el array original

numbers.splice(1, 1, "One", "Two", "Three"); // También vale para sustituir

console.log(numbers);

// SLICE

console.log("Ejemplos SLICE");
console.log(numbers);

const sub_numbers = numbers.slice(1, 3); // NO modifica el array original

console.log(sub_numbers);

const copyOfNumbers = numbers.slice(); // Nos hace una copia

console.log(copyOfNumbers);

copyOfNumbers[1] = "Espoja";

console.log(numbers);
console.log(copyOfNumbers);
