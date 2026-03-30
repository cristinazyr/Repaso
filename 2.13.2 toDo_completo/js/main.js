"use strict";

const tasksUl = document.querySelector(".js__taskUl");
const searchInput = document.querySelector(".js__searchInput");

let tasks = [];

console.log("Antes del FETCH");

fetch("https://dev.adalab.es/api/todo/Adalab")
  .then((response) => response.json())
  .then((data) => {
    // Código

    console.log("Dentro del then del FETCH");

    tasks = data.results;

    console.log(tasks);

    renderAllTasks(tasks);
  });

console.log("Después del FETCH");

function generateOneTask(taskObj) {
  if (taskObj.completed) {
    const html = `<li>
                    <input class="js__taskInput" type="checkbox" id="task-${taskObj.id}" value="${taskObj.id}" checked>
                    <label class="completed" for="task-${taskObj.id}">${taskObj.name}</label>
                  </li>`;
    return html;
  } else {
    const html = `<li>
                    <input class="js__taskInput" type="checkbox" id="task-${taskObj.id}" value="${taskObj.id}">
                    <label for="task-${taskObj.id}">${taskObj.name}</label>
                  </li>`;
    return html;
  }
}

function renderAllTasks(tasksList) {
  debugger;

  let html = "";

  for (const oneTask of tasksList) {
    html += generateOneTask(oneTask);
  }

  tasksUl.innerHTML = html;

  addEvents();
}

function addEvents() {
  const tasksInputs = document.querySelectorAll(".js__taskInput");

  for (const input of tasksInputs) {
    input.addEventListener("click", handleClickTask);
  }
}

function handleClickTask(ev) {
  debugger;

  console.log(ev.currentTarget.value);
  // Localizo la tarea que se está modificando
  const clickedTaskId = parseInt(ev.currentTarget.value);

  // Modifico los datos (el array tasks)
  const clickedTask = tasks.find((taskObj) => taskObj.id === clickedTaskId);

  //clickedTask.completed = !clickedTask.completed;

  if (clickedTask.completed === true) {
    clickedTask.completed = false;
  } else {
    clickedTask.completed = true;
  }

  // Vuelvo a pintar todo
  renderAllTasks(tasks);
}

function handleSearch(ev) {
  const seachWord = searchInput.value;

  const filteredTasks = tasks.filter((task) => task.name.includes(seachWord));

  renderAllTasks(filteredTasks);
}

searchInput.addEventListener("input", handleSearch);
