"use strict";
// Cuando la usuaria haga click en el botón hamb, al ul de menu__list se le añada la clase visible para que se muestre

const menuBtn = document.querySelector(".js__menuBtn");
const menuList = document.querySelector(".js__menuList");

menuBtn.addEventListener("click", (ev) => {
  /*  menuList.classList.add("visible");
  menuList.classList.remove("visible"); */
  menuList.classList.toggle("visible");
});
