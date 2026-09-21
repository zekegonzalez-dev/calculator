//Operation variables
let operandOne;
let operandTwo;
let operator;

//Operations
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operandOne,operandTwo,operator){
    switch(operator){
        case '+':
            return add(operandOne,operandTwo);  
        case '-':
            return subtract(operandOne,operandTwo);
        case '*':
           return multiply(operandOne,operandTwo);
        case '/':
           return divide(operandOne,operandTwo);
        default:break;
    }
}