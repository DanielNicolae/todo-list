export default function completedTask(event) {
  const checkBtn = event.target;
  if (checkBtn.classList[0] === "completedButton") {
    const parent = checkBtn.parentElement;
    if (parent.classList[1] === "completed") {
      parent.classList.remove("completed");
    } else {
      parent.classList.add("completed");
    }
  }
}