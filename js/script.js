// script.js
$(document).ready(function() {
  var calendarArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  function main() {
    if (localStorage.getItem("calendarArray") !== null) {
      calendarArray = JSON.parse(localStorage.getItem("calendarArray"));
    } else {
      localStorage.setItem("calendarArray", JSON.stringify(calendarArray));
    }
    renderCalendar();
  }

  main();