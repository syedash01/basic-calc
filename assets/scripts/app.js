const defaultResult = 0 ;
let curruntResult = defaultResult;
let logEntries = [];

function getUserInput() {
   return parseInt(userInput.value)
}

function creatAndWriteOutput(resultBefore,operator,calcnumber) {
    const calcDiscription = `${resultBefore} ${operator} ${calcnumber}`;
    outputResult(curruntResult, calcDiscription);
}

function writeLogEntry(
    opration,
    prevReult,
    userEnter,
    finalResult
) {
    const logEntry = {
    opration: opration,
    lastResult: prevReult,
    enterNumber: userEnter,
    finalResult:finalResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate (calculateType) {

    // if (
    //      calculateType !== 'ADD'      &&
    //      calculateType !== 'SUBTRACT' &&      
    //      calculateType !== 'MULTIPLY' &&      
    //      calculateType !== 'DIVIDE'  ||
    //      !enterNumber      
    // ) {
    //     return;
    // }
    const enterNumber = getUserInput();
    const initialResult = curruntResult;
    let mathOperator 

    if (calculateType === 'ADD') {
        curruntResult += enterNumber;
        mathOperator = '+';
    } else if (calculateType === 'SUBTRACT') {
        curruntResult -= enterNumber;
        mathOperator = '-'; 
    } else if (calculateType === 'MULTIPLY') {
        curruntResult *= enterNumber;
        mathOperator = '*';
    } else {
        curruntResult /= enterNumber;
        mathOperator = '/';
    }

    creatAndWriteOutput(initialResult,mathOperator,enterNumber);
    writeLogEntry(calculateType,initialResult,enterNumber,curruntResult);
    
}


function add() {
   calculate('ADD')
}

function sub() {
    calculate('SUBTRACT')
}
function multi() {
    calculate('MULTIPLY')
}
function division() {
   calculate('DIVIDE')
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multi);
divideBtn.addEventListener('click', division);