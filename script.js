//Operation variables
let operandOne;
let operandTwo;
let operator;
let isEvaluated = false;

//dom queries
const button = document.querySelectorAll('button');
const display = document.querySelector('.display');


//Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
//Function to call the correct operation
function operate(operandOne, operandTwo, operator) {
    switch (operator) {
        case '+':
            return add(parseInt(operandOne), parseInt(operandTwo));
        case '-':
            return subtract(parseInt(operandOne), parseInt(operandTwo));
        case '*':
            return multiply(parseInt(operandOne), parseInt(operandTwo));
        case '/':
            return divide(parseInt(operandOne), parseInt(operandTwo));
        default: break;
    }
}
//determines if input is an operator
function isOperator(inputOperator) {
    switch (inputOperator) {
        case '+':
            return true;
        case '-':
            return true;
        case '*':
            return true;
        case '/':
            return true;
        default:
            return false;
    }
}
//determines if input is a valid number
function isValidNumber(inputNumber) {
    const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (validNumbers.includes(inputNumber)) {
        return true;
    } else {
        return false;
    }
}
//Zero state - allows input of first digit
function isEmptyState(inputNumber) {
    if (operandOne == null && operator == null && operandTwo == null && !isOperator(inputNumber) && isValidNumber(inputNumber)) {
        return true;
    } else
        return false;
}
//first state -allows input of first operand until operator is selected
function isEnteringFirstOperand(inputNumber) {
    if (operandOne != null && operator == null && operandTwo == null && !isOperator(inputNumber) && isValidNumber(inputNumber)) {
        return true;
    } else
        return false;
}
//second state - allows input of operator
function isEnteringOperator(inputOperator) {
    if (operandOne != null && operandTwo == null && isOperator(inputOperator)) {
        return true;
    } else
        return false;
}
//third state - allows input of second operand
function isEnteringSecondOperand(inputNumber) {
    if (operandOne != null && operator != null && !isOperator(inputNumber) && isValidNumber(inputNumber) && isEvaluated === false) {
        return true;
    } else
        return false;
}
//allows call to operate
function isReadyForOperation(inputOperator) {
    if (operandOne != null && operandTwo != null && (inputOperator === "=" || isOperator(inputOperator))) {
        return true;
    } else {
        return false;
    }
}


button.forEach((button) => button.addEventListener('click', () => {
    //Operand One = null Operator = Null Operand Two - for entering the first digit
    if (isEmptyState(button.value) === true) {
        operandOne = button.value;
        display.textContent = operandOne;
        console.log("operandOne: ", operandOne)
    }
    else if (isEnteringFirstOperand(button.value) === true) {
        operandOne += button.value;
        display.textContent = operandOne;
        console.log("operandOne: ", operandOne)
    }
    //for setting the operator
    else if (isEnteringOperator(button.value)) {
        if (isOperator(button.value)) {
            operator = button.value
            console.log(operator);
        }
    }
    // setting the second operand first digit
    else if (isEnteringSecondOperand(button.value) === true) {
        if (operandTwo == null) {
            operandTwo = button.value;
            display.textContent = operandTwo;
            console.log("operandTwo: ", operandTwo)
        }
        // setting the second operand but adding more digits
        else if (operandTwo != null) {
            operandTwo += button.value;
            display.textContent = operandTwo;
            console.log("operandTwo: ", operandTwo)
        }
    }
    // calling the operate function
    else if (isReadyForOperation(button.value) === true) {
        let result = operate(operandOne, operandTwo, operator);
        display.textContent = result;
        operandOne = result;
        if (button.value !== "=") {
            operator = button.value;
            operandTwo = null;
            isEvaluated = false;
        }
        if (button.value === "=") {
            isEvaluated = true;
        }
        console.log(isEvaluated);
        console.log("operandOne:", operandOne);
        console.log("operator: ", operator);
        console.log("operandTwo:", operandTwo);
        //clear
    } else if (button.value === "clear") {
        operandOne = null;
        operandTwo = null;
        operator = null;
        display.textContent = null;
        //
    } else if (isEvaluated === true && isValidNumber(button.value)) {
        operandOne = button.value;
        operandTwo = null;
        operator = null;
        isEvaluated = false;
        display.textContent = operandOne;
        console.log("operandOne: ", operandOne)
    } else if(isEvaluated===true && isOperator(button.value)){
        operator = button.value;
        operandTwo = null;
         isEvaluated = false;
    }
}));


