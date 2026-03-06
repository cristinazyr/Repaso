"use strict";

debugger;

const saludosSection = document.querySelector(".js__saludos");

function saludar(nombre) {
  // Codigo
  //let nombre = 'Yanru';

  //console.log(`Hola ${nombre}!`);

  saludosSection.innerHTML += `<p>¡Hola ${nombre}!</p>`;
  //saludosSection.innerHTML += '<p>Hola '+nombre+'</p>';
}

console.log("Empezamos");

saludar("Yanru");
saludar("Virginia");
saludar("Victoria");
saludar("Patricia");
saludar("Laura");
saludar("Jeannette");
saludar("Alejandra");

saludar("Iván");

console.log("Acabamos");

/*
console.log('');

let nombre = 'Yanru';

function saludar() {
  // Codigo

  console.log(`Hola ${nombre}!`);
}

debugger;

console.log('Empezamos');

saludar();

nombre = 'Virginia';

saludar();

nombre = 'Victoria';

saludar();

nombre = 'Patricia';

saludar();

nombre = 'Laura';

saludar();

nombre = 'Jeannette';

saludar();

nombre = 'Alejandra';

saludar();

console.log('Acabamos');
*/
