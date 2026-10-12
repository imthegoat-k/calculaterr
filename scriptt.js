var resultBox = document.getElementById('result-box');
var previousValue = '';
var operator = '';
var msgBox = document.getElementById('msg'); 

function addNumber(number) {
  resultBox.value += number;
  msgBox.textContent = ''; 
}

function addOperator(opt) {
  if (resultBox.value.trim() === '') {       
    msgBox.textContent = 'Put value first!';
    return;
  }
  previousValue = resultBox.value;
  resultBox.value = '';
  operator = opt;
  msgBox.textContent = '';
}

function calculate() {
  var currentValue = resultBox.value;
  var result = 0;

  if (operator === '' || previousValue === '' || currentValue === '') {
    msgBox.textContent = 'Put value first!';
    return;
  }

  if (operator === "+") {
    result = parseFloat(previousValue) + parseFloat(currentValue);
  } else if (operator === "-") {
    result = parseFloat(previousValue) - parseFloat(currentValue);
  } else if (operator === "*") {
    result = parseFloat(previousValue) * parseFloat(currentValue);
  } else if (operator === "/") {
    result = parseFloat(previousValue) / parseFloat(currentValue);
  }

  resultBox.value = result.toFixed(2);
  msgBox.textContent = '';
}

function clearBox() {
  resultBox.value = '';
  previousValue = '';
  operator = '';
  msgBox.textContent = '';
}

function backspace() {
  resultBox.value = resultBox.value.slice(0, -1);
  msgBox.textContent = '';
}
