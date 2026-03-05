const inputProduct = document.querySelector(".js-product");
const inputPrice = document.querySelector(".js-price");
const btn = document.querySelector(".js-btn");
const ul = document.querySelector(".js-ul");
const result = document.querySelector(".js-result");
let total = 0;
btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const valueProduct = inputProduct.value;
  const valuePrice = parseFloat(inputPrice.value);
  //añado a la lista cada producto que introduzca en el formulario
  ul.innerHTML += `<li> ${valueProduct} - ${valuePrice} </li>`;
  //ul.innerHTML = ul.innerHTML + `<li> ${valueProduct} - ${valuePrice} </li>`;
  //modificar la variable total, con la sumatoria a pagar
  total = total + valuePrice;
  result.innerHTML = total;
  if (total >= 10) {
    result.classList.add("danger");
  }
});
