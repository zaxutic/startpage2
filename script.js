var span = document.getElementById('time');

function time() {
  var d = new Date();
  span.textContent = d.toLocaleTimeString('en-GB');
}

time();
setInterval(time, 1000);
