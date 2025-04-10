let currentInput = "";
let currentOperator = "";
let operand1, operand2, result;

function display(value) {
  if (!currentOperator) {
    document.getElementById("resultDisplay").innerHTML = result = "";
  }
  currentInput += value;
  document.getElementById("inputDisplay").innerHTML = currentInput;
}

function operator(value) {
  if (result) {
    operand1 = result;
  } else {
    operand1 = Number(currentInput);
  }

  currentOperator = value;
  document.getElementById("inputDisplay").innerHTML =
    currentInput + currentOperator;
  currentInput = "";
}

// triggered when = is clicked. it calculates the result based on the operator and operands
function calculate() {
  operand2 = currentInput;

  switch (currentOperator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "x":
      result = operand1 * operand2;
      break;
    case "/":
      result = operand1 / operand2;
      break;
  }

  document.getElementById("resultDisplay").innerHTML = result;
  document.getElementById("inputDisplay").innerHTML = "";
  currentInput = "";
  currentOperator = "";
}

function clearAll() {
  currentInput = "";
  currentOperator = "";
  result = "";
  document.getElementById("inputDisplay").innerHTML = "0";
  document.getElementById("resultDisplay").innerHTML = "0";
}
