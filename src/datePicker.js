
const selectedDate = document.querySelector(".selectedDate");
const dates = document.querySelector(".dates");



export default function toggleDatePicker(e) {
  dates.classList.toggle("active");
  // if (!checkEventPathForClass(e.path, "dates")) {
  //   dates.classList.toggle("active");
  // }
}

// function checkEventPathForClass(path, selector) {
//   for (let i = 0; i < path.length; i++) {
//     if (path[i].classList && path[i].classList.contains(selector)) {
//       return true;
//     }
//   }
//   return false;
// }