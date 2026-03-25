"use strict";
/*
const btn = document.querySelector('.js__btn');
const text = document.querySelector('.js__text');

let counter = 0;

const counterFromLS = localStorage.getItem('counter');

console.log(counterFromLS);

counter = counterFromLS;

text.innerHTML = `Llevas ${counter} clicks`;


function handleClickBtn(ev) {
  counter++;

  localStorage.setItem('counter', counter);

  text.innerHTML = `Llevas ${counter} clicks`;
}

btn.addEventListener('click', handleClickBtn);
*/

const firstnameInput = document.querySelector(".js__firstnameInput");
const lastnameInput = document.querySelector(".js__lastnameInput");

let data = {
  firstname: "",
  lastname: "",
  address: "",
};

console.log(data);

const handleInputFirstName = (ev) => {
  //  ev.currentTarget  ===  firstnameInput

  const value = ev.currentTarget.value;

  data.firstname = value;

  console.log(data);

  localStorage.setItem("formData", JSON.stringify(data));
};

const handleInputLastName = (ev) => {
  const value = ev.currentTarget.value;

  data.lastname = value;

  console.log(data);

  localStorage.setItem("formData", JSON.stringify(data));
};

firstnameInput.addEventListener("input", handleInputFirstName);
lastnameInput.addEventListener("change", handleInputLastName);

const dataFromLS = JSON.parse(localStorage.getItem("formData"));

if (dataFromLS !== null) {
  console.log(dataFromLS);

  data = dataFromLS;

  firstnameInput.value = data.firstname;
  lastnameInput.value = data.lastname;
}
