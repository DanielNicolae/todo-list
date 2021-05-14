
export default function deleteListTask(e) {
  const deleteBtn = e.target;
  if (deleteBtn.classList[0] === "trashButton") {
    const parent = deleteBtn.parentElement;
    parent.classList.add("scaleDown");
    parent.addEventListener("transitionend", () => {
      parent.remove();
      removeFromStorage(parent);
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
  console.log(todos.indexOf(todoItem))
  todos.splice(todos.indexOf(todoItem), 1);
}