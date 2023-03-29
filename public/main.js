var value = 0;

function init() {
  if(localStorage.getItem('value')) {
    value = localStorage.getItem('value')
  }
  else value = 0;
  document.getElementById("value").innerText = '' + value;
}

function more() {
  value++;
  document.getElementById("value").innerText = '' + value;
  localStorage.setItem('value', value);
}

function less() {
  value--;
  document.getElementById("value").innerText = '' + value;
  localStorage.setItem('value', value);
}