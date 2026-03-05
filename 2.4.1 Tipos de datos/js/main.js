const age = 25; // numericos, operaciones aritmeticas, num decimales y enteros
const name = "anacleta";
const price = "200"; //
console.log(typeof age);
console.log(typeof price);
// todos los datos que obtenemos de un formulario son string

console.log(2 === "2");
const priceNum = parseInt(price);
console.log(typeof priceNum);

const priceDress = "250.36";
const priceDressNumber = parseFloat(priceDress);

console.log(price + 50);
console.log(priceNum + 50);
console.log(typeof priceDressNumber);

const nameNumber = parseInt(name); //NaN  not a number
console.log(nameNumber);
if (isNaN(priceDressNumber)) {
  console.log("este  no es un numero");
} else {
  console.log("si es un numero");
}

const student = "isa";
const student2 = "ana";

console.log("bienvenida " + student + " y " + student2);
console.log(`bienvenida  ${student} y ${student2} `);
console.log(`El nuevo precio es: ${priceNum * 3}`);

const section = document.querySelector(".js-section");
section.innerHTML = `<p> Bienvenida ${student} y ${student2} </p>`;

const isActive = true;
const pepino = false;

let lastname;
console.log(typeof lastname);

// 0, "", null, undefined   --> false falsy

if (lastname) {
  //lastname --> lastname === true
  console.log(lastname);
} else {
  console.log("esta variable no esta definida");
}
