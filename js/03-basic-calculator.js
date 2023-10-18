// Assignment 04
// Maria Cecilia Schultz
// Basic Calculator

// User is prompted for an operation (+ - * or / (q to stop))
// If operation is invalid we will continue prompting until it is valid (or user stops)
// A message will be displayed with the result

while (true) {

  // get the numbers
  let number1 = parseFloat(prompt('Enter the first number: '));
  let number2 = parseFloat(prompt('Enter a second number: '));

  let operation = getOperationChoice();   // get the operation

  // check if want to stop
  if (operation == "q") {
    break;
  }

  // calculate result
  let result = calculate(number1, number2, operation);

  // display result
  let resultMessage = `${number1} ${operation} ${number2} is ${result}`;
  alert(resultMessage);

}

// Prompt user to enter an operation
// Input is validated: it continues prompting if operation is invalid (or user wants to stop)
function getOperationChoice() {
  while (true) {
    let operCode = prompt('Enter the operation (+ for sum, - for subtraction, * for multiplication, / for division, (q to stop): ').toLowerCase();

    if (isOperationValid(operCode) || operCode == "q") {
      return operCode;
    }

  }
}

// Performs the indicated operation and returns the corresponding result
// Assumes operator is valid
function calculate(number1, number2, operation) {

  let result;
  switch (operation) {
    case "+": // sum
      result = number1 + number2;
      break;
    case "-": // subtraction
      result = number1 - number2;
      break;
    case "*": // multiplication
      result = number1 * number2;
      break;
    default: // division 
      result = number1 / number2;
      break;
  }
  return result;
}



function isOperationValid(operCode) {
  let isValid = (operCode == "+" || operCode == "-" || operCode == "*" || operCode == "/");
  return isValid;
}

// Returns the label for corresponding operation code
// Valid operation codes: + - * or / 
function getOperationLabel(operCode) {

  if (!isOperationValid(operCode)) {
    return "Invalid Operation (expected + - * or /)";
  }

  let operLabel;
  switch (operCode.trim()) {
    case "+":
      operLabel = "sum";
      break;
    case "-":
      operLabel = "subtraction";
      break;

    case "*":
      operLabel = "multiplication";
      break;
    case "/":
      operLabel = "division";
      break;
  }
  return operLabel;
}