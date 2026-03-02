"use strict";
const ageInput = document.querySelector(".js__ageInput");
const ageResult = document.querySelector(".js__ageResult");
ageInput.addEventListener("input", (ev) => {
  if (ageInput.value >= 18) {
    ageResult.innerHTML = "Es mayor de edad";
  } else {
    ageResult.innerHTML = "Es menor de edad";
  }
});
