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
            return add(parseInt(operandOne),parseInt(operandTwo));  
        case '-':
            return subtract(operandOne,operandTwo);
        case '*':
           return multiply(operandOne,operandTwo);
        case '/':
           return divide(operandOne,operandTwo);
        default:break;
    }
}

function isOperator(inputOperator){
    switch(inputOperator){
        case '+':
            return true;
        case '-':
            return true;
        case '*':
           return true;
        case '/':
             return true;
        case '=':
            return true;
        default:
            return false;
    }
}

const button = document.querySelectorAll('button');
const display = document.querySelector('.display');

button.forEach((button)=> button.addEventListener('click', (event)=>{
if(operandOne==null && operandTwo==null && !isOperator(button.value)){
   operandOne = button.value;
   display.textContent=operandOne;
   console.log("operandOne: ",operandOne)
}
else if(operandOne!=null && operandTwo==null && !isOperator(button.value) && operator==null){
    operandOne+=button.value;
     display.textContent=operandOne;
     console.log("operandOne: ",operandOne)
}
else if(operandOne!=null && operandTwo==null && isOperator(button.value) ){
    operator=button.value
    console.log(operator);
}
else if(operandOne!=null && operator!=null && operandTwo==null && !isOperator(button.value)){
     operandTwo = button.value;
     display.textContent=operandTwo;
      console.log("operandTwo: ", operandTwo)
}
else if(operandTwo!=null && operator!=null && !isOperator(button.value)){
     operandTwo+=button.value;
     display.textContent=operandTwo;
     console.log("operandTwo: ", operandTwo)
} 
else if(button.value==="="){
    let result = operate(operandOne,operandTwo,operator);
    display.textContent= result;
    operandOne = result;
}
}));


