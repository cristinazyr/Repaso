"use strict";
/* console.log("Hola");
console.log("¿Cómo estás?");
console.log(16 + 24);

//Variables

//Variables constantes (la forma que vamos a usar)
const text = "Hola";
console.log(text);

//Variables let
//debugger;
let number = 1;
console.log(number);
number = 10;
console.log(number);

let a = 10;
let b = 20;
let c = a + b;
console.log(c);

b = 50;
c = a + b;
console.log(c); */

const imgGato = document.querySelector(".js__imggato");
console.log(imgGato);
imgGato.src = "images/simba2.jpg";

const paragraph = document.querySelector(".js__paragraph");
paragraph.innerHTML = "<h2>holis</h2><img src='images/simba1.jpg'>";

const menuList = document.querySelector(".js__menulist");
menuList.classList.add("hidden");
menuList.classList.remove("hidden");
