"use strict";

/*

const vari =  ;

- Tipos de datos simples

  - Números
  - 'Textos'
  - undefined
  - true / false
      const mostrarVentana = condición === 1;


- Tipos de datos complejos

  - Funciones
  - null
      const elemento = document.querySelector('claseNoExiste'); // -> null
  - Objectos
  - Arrays

  - BigInt
  - Symbol
*/
const objeto1 = {
  a: 1,
  b: 2,
  c: 3,
};

const a = 1;
const b = 2;
const c = 3;

const suma = objeto1.a + objeto1.b + objeto1.c;
/*
console.log( suma );

console.log( objeto1 );

function jeannette() {

  const objeto2 = {
    x: 99,
    y: 98,
    z: 87
  }

  console.log( objeto1.b );

  console.log( objeto2.x );

  return objeto2;
}

const objeto2 = jeannette();

objeto2.x;
*/
const adalaber = {
  nombre: "MariCarmen",
  promo: "Betty",
  nota: "",
};

console.log(adalaber);

adalaber.nombre = "MariCarmen Salas";
adalaber.nota = "Destaca";

adalaber.pair = 2;
adalaber.equipo = "Triunfadoras del JS";
console.log(adalaber);

const gatito = {};

gatito.nombre = "Misifú";
gatito.color = "Rubio";
gatito.num_patas = 4;

console.log(gatito);
// -------------

const profe = {
  nombre: "Iván",
  altura: 180,
  peso: 85,
  cara: {
    "numero ojos": 2,
    colorPelo: "marrón",
    barba: true,
  },
  promos: {
    promoBetty: "profesor",
    promoG: "assistant",
    promoAlice: {
      rol: "profesor",
      finalizada: false,
    },
  },
};
console.log(profe["numero ojos"]);

profe.nombre === profe["nombre"];

const nombrePropiedad = "altura";

console.log(profe[nombrePropiedad]);

profe.promos.promoAlice.finalizada = true;
// -  MÉTODOS  -----------

const perroLia = {
  nombre: "Lia",
  raza: "Mezcla",
  edad: 14,
  dueño: true,

  ladrar: function () {
    console.log(this.nombre + " dice: Guau!");
  },
};

const perroLeo = {
  nombre: "Leo",
  raza: "Mezcla",
  edad: 14,
  dueño: true,

  ladrar: function () {
    console.log(this.nombre + " dice: Guau!");
  },
};

perroLia.ladrar();
perroLeo.ladrar();
