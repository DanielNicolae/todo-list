const datePicker = document.querySelector(".datePicker");
const selectedDateUI = document.querySelector(".selectedDate");
const datesUI = document.querySelector(".dates");
const monthUI = document.querySelector(".datePicker .dates .month .date");
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

function getNextMonth(e) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  monthUI.textContent = months[month] + " " + year;
}

function getPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  monthUI.textContent = months[month] + " " + year;
}


function generateDate() {
  monthUI.textContent = months[month] + " " + year;
}

function toggleDatePicker(event) {
  console.log(event.target)
  if (checkEventPathForClass(event.target, "selectedDate")) {
    datesUI.classList.toggle("active");
  }
}

function checkEventPathForClass(path, selector) {
  if (path.classList.contains(selector)) {
    return true;
  }
  return false;
}

export { toggleDatePicker, generateDate, getNextMonth, getPrevMonth };