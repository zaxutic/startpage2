var timeElem = document.getElementById('time');

function time() {
  var d = new Date();
  timeElem.textContent = d.toLocaleTimeString('en-GB');
}

time();
setInterval(time, 1000);
