let clock = document.getElementById("clock");
let timer = null;
var pause_btn = document.querySelector("#pause_btn");
var start_btn = document.querySelector("#start_btn");
timer = setInterval(runClock, 1000);

function runClock() {
  clock.textContent = new Date().toLocaleTimeString();
}
function pause() {
  if (timer !== null) {
    // Cancel the timer
    clearInterval(timer);
    // Reset the timer because the clock is now not ticking.
    timer = null;
  } else {
    timer = setInterval(runClock, 1000);
  }
}
