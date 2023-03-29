var value = 0;

function more() {
  value++;
  document.getElementById("value").innerText = '' + value;
}

function less() {
  value--;
  document.getElementById("value").innerText = '' + value;
}