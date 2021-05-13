import deleteListTask from "./deletetask";
import completedTask from "./completedtask";
import filterList from "./filterList";
import { toggleDatePicker, generateDate, getNextMonth, getPrevMonth, selectDate, populateDates } from "./datePicker";

// Selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterDropdown = document.querySelector(".filterTasks");
const todoDescriptionText = document.querySelector(".inputDescription");
const datePicker = document.querySelector(".datePicker");
const nextMonthUI = document.querySelector(".datePicker .dates .month .nextMonth");
const prevMonthUI = document.querySelector(".datePicker .dates .month .prevMonth");
const selectedDateUI = document.querySelector(".selectedDate");

//Event listeners
todoButton.addEventListener("click", addTodoTask);
filterDropdown.addEventListener("click", filterList);
datePicker.addEventListener("click", toggleDatePicker);
nextMonthUI.addEventListener("click", getNextMonth);
prevMonthUI.addEventListener("click", getPrevMonth);

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

  // todo description
  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todoDescription");
  todoDescription.innerText = todoDescriptionText.value;
  todoTaskContainer.appendChild(todoDescription);
  todoDescriptionText.value = "";

  // todo date
  const todoDate = document.createElement("p");
  todoDate.classList.add("todoDate");
  todoDate.textContent = selectedDateUI.innerText;
  todoTaskContainer.appendChild(todoDate);
}

filterList();
generateDate();
selectDate();
populateDates();
