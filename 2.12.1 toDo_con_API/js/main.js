"use strict";
const tasksUl = document.querySelector(".js__taskUl");
const searchInput = document.querySelector(".js__searchInput");
let tasks = [];

console.log("Antes del FETCH");
/*
setInterval(() => {
  
}, 10000);
*/
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

/* const tasks = [
  {
    id: 102,
    name: "Sacar punta a los lápices",
    completed: true,
  },
  {
    id: 240,
    name: "Poner la lavadora",
    completed: false,
  },
  {
    id: 278,
    name: "Comprar bragas",
    completed: false,
  },
  {
    id: 569,
    name: "Sacar punta a los lápices",
    completed: false,
  },
]; */
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
function renderAllTasks() {
  let html = "";
  for (const oneTask of tasks) {
    html += generateOneTask(oneTask);
  }
  tasksUl.innerHTML = html;
}
renderAllTasks();
/* const oneTask = {
  id: 569,
  name: "Sacar punta a los lápices",
  completed: false,
};
const html = generateOneTask(oneTask);
console.log(html);
 */
