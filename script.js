//Operation variables
let operandOne;
let operandTwo;
let operator;
let isEvaluated = false;


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
            return subtract(parseInt(operandOne),parseInt(operandTwo));
        case '*':
           return multiply(parseInt(operandOne),parseInt(operandTwo));
        case '/':
           return divide(parseInt(operandOne),parseInt(operandTwo));
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
        default:
            return false;
    }
}

function isValidNumber(inputNumber){
    const validNumbers =["0","1","2","3","4","5","6","7","8","9"];
    if(validNumbers.includes(inputNumber)){
        return true;
    }else{
        return false;
    }

}

const button = document.querySelectorAll('button');
const display = document.querySelector('.display');

button.forEach((button)=> button.addEventListener('click', (event)=>{
//Operand One = null Operator = Null Operand Two - for entering the first digit
if(operandOne==null && operandTwo==null && !isOperator(button.value) && isValidNumber(button.value)){
   operandOne = button.value;
   display.textContent=operandOne;
   console.log("operandOne: ",operandOne)
}
//Operand One = not null Operator = Null Operand Two = null - for entering more digits for first operand
else if(operandOne!=null && operandTwo==null && !isOperator(button.value) && operator==null && isValidNumber(button.value)){
    operandOne+=button.value;
     display.textContent=operandOne;
     console.log("operandOne: ",operandOne)
}
 //for setting the operator
else if(operandOne!=null && operandTwo==null && isOperator(button.value)){
    if(button.value!=="=" && button.value!=='clear'){
    operator=button.value
    console.log(operator);
    }
}
// setting the second operand first digit
else if(operandOne!=null && operator!=null && operandTwo==null && !isOperator(button.value) && isValidNumber(button.value)){
     operandTwo = button.value;
     display.textContent=operandTwo;
      console.log("operandTwo: ", operandTwo)
}// setting the second operand but adding more digits
else if(operandOne!=null && operandTwo!=null && operator!=null && !isOperator(button.value) && isValidNumber(button.value) && isEvaluated===false){
     operandTwo+=button.value;
     display.textContent=operandTwo;
     console.log("operandTwo: ", operandTwo)
}
// calling the operate function
else if(operandOne!=null && operandTwo!=null && (button.value==="=" || isOperator(button.value)) ){
    let result = operate(operandOne,operandTwo,operator);
    display.textContent= result;
    operandOne = result;
    if(button.value!=="=")operator = button.value;
    isEvaluated = true;
    console.log("operandOne:",operandOne);
    console.log("operator: ",operator);
    console.log("operandTwo:",operandTwo);
    //clear
}else if(button.value==="clear"){
    operandOne=null;
    operandTwo=null;
    operator=null;
    console.log("operandOne: ",operandOne);
    console.log("operandTwo: ",operandTwo);
    console.log("operator: ",operator);
    display.textContent=null;
    //
}else if(isEvaluated===true && isValidNumber(button.value)){
    operandOne = button.value;
    operandTwo = null;
    operator = null;
    isEvaluated = false;
   display.textContent=operandOne;
   console.log("operandOne: ",operandOne)
}
}));


