export default function deleteListTask(e) {
  const deleteBtn = e.target;
  if (deleteBtn.classList[0] === "trashButton") {
    const parent = deleteBtn.parentElement;
    parent.classList.add("scaleDown");
    parent.addEventListener("transitionend", () => {
      parent.remove();
    });
  }
}