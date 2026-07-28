const clock = document.querySelector(".clock");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const bntReset = document.querySelector(".bntReset");
const collorStop = "#ff0000";
const collorStart = "#008000"

let miliseconds = 0;
let timer;

btnStart.addEventListener("click", function (event) {
  if (timer == null) {
    clock.style.color = collorStart;
    timer = setInterval(function () {
      miliseconds++;
      clock.innerHTML = getTimeFromSeconds(miliseconds);
    }, 10);
  }
});

btnStop.addEventListener("click", function (event) {
  clearInterval(timer);
  timer = null;
  clock.style.color = collorStop;
});

bntReset.addEventListener("click", function (event) {
  clearInterval(timer);
  miliseconds = 0;
  timer = null;
  clock.innerHTML = getTimeFromSeconds(miliseconds);
  clock.style.color = null;
});

function getTimeFromSeconds(miliseconds) {
  let date = new Date(miliseconds * 10);
  return date.toLocaleTimeString("pt-BR", {
    fractionalSecondDigits: 2,
    hour12: false,
    timeZone: "UTC",
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).replace(',', ':');
}
