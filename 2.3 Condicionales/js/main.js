"use strict";
const ageInput = document.querySelector(".js__ageInput");
const ageResult = document.querySelector(".js__ageResult");
ageInput.addEventListener("input", (ev) => {
  if (ageInput.value === "") {
    ageResult.innerHTML = "Escribe un número";
  } else {
    if (ageInput.value >= 18) {
      ageResult.innerHTML = "Es mayor de edad";
    } else {
      ageResult.innerHTML = "Es menor de edad";
    }
  }
});

/*menu*/
const menuBtn = document.querySelector(".js__menuBtn");
const menuList = document.querySelector(".js__menuList");
menuBtn.addEventListener("click", (ev) => {
  if (menuList.classList.contains("visible")) {
    menuList.classList.remove("visible");
  } else {
    menuList.classList.add("visible");
  }
});
