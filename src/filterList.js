
const TodoList = document.querySelector(".todoList");


export default function filterList(e) {
  const todos = TodoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "grid";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "grid";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "grid";
        }
        break;
    }
  })
}