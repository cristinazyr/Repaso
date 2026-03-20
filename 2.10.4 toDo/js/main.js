"use strict";

const taskUl = document.querySelector(".js__taskUl");

const tasks = [
  "Sacar punta a los lápices",
  "Poner la lavadora",
  "Comprar bragas" /*[2]*/,
];
function handleClickTask(event) {
  // Código

  const taskToDelete = event.currentTarget.innerHTML;

  console.log("Has hecho click para borrar en la tarea", taskToDelete);
  //event.currentTarget.classList.add('hidden')

  const positionToDelete = tasks.indexOf(taskToDelete); //'Comprar bragas') // -> 2

  tasks.splice(positionToDelete, 1);
  renderTasks();
}

function assignEvents() {
  // Cuando acaba el for -> Tenemos todos los <li> en la página
  // 2. Buscamos los <li> con la clase js__task y les asignamos
  //    un evento click.

  const taskArray = document.querySelectorAll(".js__task");

  console.log(taskArray);

  for (const taskElement of taskArray) {
    taskElement.addEventListener("click", handleClickTask);
  }
}

function renderTasks() {
  // 0. Borra el contenido del <ul>
  taskUl.innerHTML = "";

  // 1. Generamos los <li> por cada tarea del array tasks -> Se ponen en la página

  for (const oneTask of tasks) {
    taskUl.innerHTML += `<li class="js__task">${oneTask}</li>`;
  }

  // 2. Asignamos los eventos
  assignEvents();
}

/* function renderTasks() {
  //1. Generamos los <li> por cada tarea del array tasks  --> se pone en la página
  taskUl.innerHTML = "";
  for (const oneTask of tasks) {
    taskUl.innerHTML += `<li class="js__task"><label>${oneTask}</label></li>`;
  }
  //Cuando acabe el for --> Tenemos todos los <li> en la página
  //Buscamos todos los <li> con la clase js__task y les asignamos un evento click
  const taskArray = document.querySelectorAll(".js__task");
  console.log(taskArray);
  for (const taskElement of taskArray) {
    taskElement.addEventListener("click", (ev) => {
      const taskToDelate = ev.currentTarget.innerHTML;
      const positionToDelate = tasks.indexOf(taskToDelate);
      tasks.splice(positionToDelate, 1);
      renderTasks();
    });
  }
}

 */
renderTasks();
