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
  populateDates();
}

function getPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  monthUI.textContent = months[month] + " " + year;
  populateDates();
}


function generateDate() {
  monthUI.textContent = months[month] + " " + year;
}

function selectDate() {
  selectedDateUI.textContent = selectDateHelper(date);
}

function selectDateHelper(d) {
  let day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let year = d.getFullYear();
  return (day + "/" + month + "/" + year);
}

function toggleDatePicker(event) {
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

function populateDates(e) {
  daysUI.innerHTML = "";
  let days = 31;
  if (month === 1) {
    days = 28;
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    days = 30;
  }
  for (let i = 0; i < days; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.textContent = i + 1;
    daysUI.appendChild(dayElement);
  }
}

export { toggleDatePicker, generateDate, getNextMonth, getPrevMonth, selectDate, populateDates };