let hoursSpan = document. querySelector(".hours");
let minutesSpan = document. querySelector(".minutes");
let secondsSpan = document. querySelector(".seconds");

function renderClock() {
let hours = new Date().getHours();
let minutes = new Date().  getMinutes();
let seconds = new Date(). getSeconds();

hoursSpan. textContent = hours;
minutesSpan. textContent = minutes;
secondsSpan. textContent = seconds;
}
setInterval( renderClock, 1000);