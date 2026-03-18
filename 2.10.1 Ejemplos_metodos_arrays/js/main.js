"use strict";
const numbers = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

// SPLICE

console.log("Ejemplos SPLICE");
console.log(numbers);

///numbers.splice(1, 3); // Modifica el array original

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
