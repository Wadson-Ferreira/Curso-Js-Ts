//Feito por mim:

/* 

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
} */

//Solução do professor:
/* 
const clock = document.querySelector(".clock");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const bntReset = document.querySelector(".bntReset");

let seconds = 0;
let timer;

btnStart.addEventListener("click", function (event) {
  clock.classList.remove('pausado');
  clearInterval(timer);
  startTimer();
});

btnStop.addEventListener("click", function (event) {
  clock.classList.add('pausado');
  stopTimer();
});

bntReset.addEventListener("click", function (event) {
  stopTimer();
  seconds = 0;
  clock.innerHTML = getTimeFromSeconds(seconds);
}); */

//Melhorando o código junção do professor com algumas coisas que tambem inseri

function stopwatch() {
  const clock = document.querySelector(".clock");
  let seconds = 0;
  let timer;

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("btnStart")) {
      if (timer == null) {
        clock.classList.add("colorStart");
        startTimer();
      }
    }
    if (el.classList.contains("btnStop")) {
      clock.classList.remove("colorStart");
      clock.classList.add("colorStop");
      stopTimer();
    }
    if (el.classList.contains("bntReset")) {
      stopTimer();
      seconds = 0;
      clock.classList.remove("colorStart", "colorStop");
      clock.innerHTML = getTimeFromSeconds(seconds);
    }
  });

  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function startTimer() {
    timer = setInterval(function () {
      seconds++;
      clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }
}

stopwatch();
