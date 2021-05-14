function saveToLocalStorage(list) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(list);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export default saveToLocalStorage;