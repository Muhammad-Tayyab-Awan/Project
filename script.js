setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let hoursBox = document.getElementsByClassName("dhours");
  let minutesBox = document.getElementsByClassName("dminutes");
  let secondsBox = document.getElementsByClassName("dsecondss");
  hoursBox[0].innerText = hours;
  console.log(hoursBox[0]);
  minutesBox[0].innerText = minutes;
  secondsBox[0].innerText = seconds;
  let hour_needle = document.querySelector(".hours");
  let minute_needle = document.querySelector(".minutes");
  let second_needle = document.querySelector(".seconds");
  hour_needle.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  minute_needle.style.transform = `rotate(${6 * minutes}deg)`;
  second_needle.style.transform = `rotate(${6 * seconds}deg)`;
}, 10);
let date = new Date();
if (date.getHours() >= 19 || date.getHours() < 7) {
  let body = document.getElementsByTagName("body");
  body[0].classList.add("night");
}
