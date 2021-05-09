const { charset } = require("mime-types");

// Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");


todoButton.addEventListener("click", addTodoTask);


// Functions
function addTodoTask(event) {
  event.preventDefault();
  const todoTaskContainer = document.createElement("div");
  todoTaskContainer.classList.add("todoTaskContainer");
  const todoTask = document.createElement("li");
  todoTask.classList.add("todoTask");
  todoTask.innerText = todoInput.value;

  const completedBotton = document.createElement("button");
  completedBotton.innerHTML = '<i class="fas fa-check"></i>';
  completedBotton.classList.add("completedButton");
  completedBotton.addEventListener("click", completedTask);
  todoTaskContainer.appendChild(completedBotton);
  todoTaskContainer.appendChild(todoTask);

  const trashBotton = document.createElement("button");
  trashBotton.innerHTML = '<i class="fas fa-trash"></i>';
  trashBotton.classList.add("trashButton");
  trashBotton.addEventListener("click", deleteListTask);
  todoTaskContainer.appendChild(trashBotton);

  todoList.appendChild(todoTaskContainer);
  todoInput.value = "";
}

function deleteListTask(event) {
  const deleteBtn = event.target;
  if (deleteBtn.classList[0] === "traskButton") {
    const parent = deleteBtn.parentElement;
    parent.remove();
  }
}

function completedTask(event) {
  const checkBtn = event.target;
  if (checkBtn.classList[0] === "completedButton") {
    const parent = checkBtn.parentElement;
    parent.classList.add("completed");
  }
}

