"use strict";
const dayInput = document.querySelector(".js__dayInput");
const monthInput = document.querySelector(".js__monthInput");
const btn = document.querySelector(".js__btn");
const result = document.querySelector(".js__result");

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (dayInput.value <= 0 || dayInput.value > 31) {
    result.innerHTML = "El día no es correcto";
  } else if (monthInput.value === "") {
    result.innerHTML = "El mes está vacío";
  } else if (
    dayInput.value === "13" &&
    monthInput.value.toLowerCase().trim() === "octubre"
  ) {
    result.innerHTML = "Es el día final de bootcamp";
  }
});
