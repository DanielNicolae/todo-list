import deleteListTask from "./deletetask";
import completedTask from "./completedtask";
import filterList from "./filterList";

// Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterDropdown = document.querySelector(".filterTasks");

todoButton.addEventListener("click", addTodoTask);
filterDropdown.addEventListener("click", filterList);

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

filterList();

