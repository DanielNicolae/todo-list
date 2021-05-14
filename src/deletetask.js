
export default function deleteListTask(e) {
  const deleteBtn = e.target;
  if (deleteBtn.classList[0] === "trashButton") {
    const parent = deleteBtn.parentElement;
    removeFromStorage(parent);
    parent.classList.add("scaleDown");
    parent.addEventListener("transitionend", () => {
      parent.remove();
    });
  }
}

function removeFromStorage(item) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const itemTitle = item.children[1].innerText;
  const todoItem = todos.find(todo => todo.title === itemTitle);
  const indexOfItem = todos.indexOf(todoItem);
  console.log(indexOfItem)
  todos.splice(indexOfItem, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}