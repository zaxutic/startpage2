const timeElem = document.getElementById('time');

function time() {
  const d = new Date();
  timeElem.textContent = d.toLocaleTimeString('en-GB');
}

time();
setInterval(time, 1000);
