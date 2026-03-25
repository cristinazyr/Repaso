"use strict";

const tasksUl = document.querySelector(".js__taskUl");
const searchInput = document.querySelector(".js__searchInput");

let tasks = [];

const tasksFromLS = JSON.parse(localStorage.getItem("tasks"));

if (tasksFromLS !== null) {
  console.log("Recuperamos las tasks del LS");

  tasks = tasksFromLS;

  renderAllTasks(tasks);
} else {
  // Lo que nos traemos del LS es null
  console.log("En el LS no hay nada, tenemos que hacer el fetch");

  console.log("Antes del FETCH");

  fetch("https://dev.adalab.es/api/todo/Adalab")
    .then((response) => response.json())
    .then((data) => {
      // Código

      console.log("Dentro del then del FETCH");

      tasks = data.results;

      localStorage.setItem("tasks", JSON.stringify(tasks));

      console.log(tasks);

      renderAllTasks(tasks);
    });

  console.log("Después del FETCH");
}

function generateOneTask(taskObj) {
  if (taskObj.completed) {
    const html = `<li>
                    <input type="checkbox" id="task-${taskObj.id}">
                    <label class="completed" for="task-${taskObj.id}">${taskObj.name}</label>
                  </li>`;
    return html;
  } else {
    const html = `<li>
                    <input type="checkbox" id="task-${taskObj.id}">
                    <label for="task-${taskObj.id}">${taskObj.name}</label>
                  </li>`;
    return html;
  }
}

function renderAllTasks(tasksList) {
  let html = "";

  for (const oneTask of tasksList) {
    html += generateOneTask(oneTask);
  }

  tasksUl.innerHTML = html;
}

function handleSearch(ev) {
  const seachWord = searchInput.value;

  const filteredTasks = tasks.filter((task) => task.name.includes(seachWord));

  renderAllTasks(filteredTasks);
}

searchInput.addEventListener("input", handleSearch);
