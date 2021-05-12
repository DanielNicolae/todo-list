const datePicker = document.querySelector(".datePicker");
const selectedDateUI = document.querySelector(".selectedDate");
const datesUI = document.querySelector(".dates");
const monthUI = document.querySelector(".datePicker .dates .month .date");
const nextMonthUI = document.querySelector(".datePicker .dates .month .nextMonth");
const prevMonthUI = document.querySelector(".datePicker .dates .month .prevMonth");
const daysUI = document.querySelector(".datePicker .dates .days");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let currentDate = date;
let currentDay = day;
let currentMonth = month;
let currentYear = year;


function generateDate() {
  monthUI.textContent = months[month] + " " + year;
}

function toggleDatePicker(event) {
  if (!checkEventPathForClass(event.target, "dates")) {
    datesUI.classList.toggle("active");
  }
}

function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }
  return false;
}

export { toggleDatePicker, generateDate };