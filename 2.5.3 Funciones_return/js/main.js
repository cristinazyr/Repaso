"use strict";

// SECCIÓN QUERY-SELECTOR
const btn = document.querySelector(".js__btn");
const baseInput = document.querySelector(".js__baseInput");
const resultadoParagraph = document.querySelector(".js__resultado");

// SECCIÓN DE DATOS
// SECCIÓN DE FUNCIONES
// Base imponible  = 100€
// Calcular IRPF 15% == 15 y IVA 21%  21€
// Devolver importe  base - IRPF + IVA

const calcularImporte = (base) => {
  const irpf = base * 0.15;
  const iva = base * 0.21;
  const importe = base - irpf + iva;
  return importe;
};

const importe1 = calcularImporte(100);
const importe2 = calcularImporte(2000);
const importeIntroducidoPorLaUsuaria = 500;
const importe3 = calcularImporte(importeIntroducidoPorLaUsuaria);
// SECCIÓN DE FUNCIONES DE EVENTOS
const handleClickBtn = (ev) => {
  ev.preventDefault();
  // 1. Traer el valor (value) que ha escrito la usuaria en el input
  const base = parseFloat(baseInput.value);
  // 2. Con ese valor, llamar a la función que calcula el importe.
  //    Recoger el valor del importe que genera la función y me lo guardo en una vari.
  const importe = calcularImporte(base);
  // 3. Muestro el valor del importe en el HTML (en el párrafo resultado)
  resultadoParagraph.innerHTML = `El importe es de ${importe}€.`;
};
btn.addEventListener("click", handleClickBtn); // SIN PARÉNTESIS!
// SECCIÓN CUANDO CARGA LA PÁGINA
/* let total = 0;

const importe1 = calcularImporte(100);

console.log(importe1);

total = importe1;

const importe2 = calcularImporte(2000);

console.log(importe2);

total = total + importe2; // total += importe2;

const importeIntroducidoPorLaUsuaria = 5000;

const importe3 = calcularImporte(importeIntroducidoPorLaUsuaria);

console.log(importeIntroducidoPorLaUsuaria, importe3);

total += importe3;

clasica();

function clasica() {
  console.log("Hola");
}

clasica();

// arrow();  -> No deja

const arrow = () => {
  console.log("Hola");
};

arrow(); */

// Función callback: Lanzando la función funcion() con una función como parámetro.
// funcion( () => {} )
