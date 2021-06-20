const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MUTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }

  const enterNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enterNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enterNumber;
    mathOperator = '-';
  } else if (calculationType === 'MUTIPLY') {
    currentResult -= enterNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult -= enterNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enterNumber);
  writeToLog(calculationType, initialResult, enterNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MUTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
