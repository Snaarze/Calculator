// getter methods
const NumberBtn = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const result = document.querySelector('.result');
const displayInput = document.querySelector('.input');

let num1 = null;
let num2 = null;
let firstOp = null;
let PreviousOp = null
let nextOp = null



NumberBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        if (displayInput.textContent === "0" || displayInput.textContent == num1) {
            displayInput.textContent = "";
        }
            displayInput.textContent += e.textContent
    })
});



// set the value of the op to which button is pressed
operator.forEach(element =>{
    element.addEventListener('click',()=>{
    
        if(!firstOp){
            firstOp= element.textContent;
            PreviousOp = firstOp;
            console.log(`this is first ${firstOp}`)
            
        }else {
            nextOp = element.textContent
            console.log(`this is second ${nextOp}`);
        }
        if(num1 === null) {
            num1 = +displayInput.textContent;
            displayInput.textContent = "";
            return;
        }
        if(num1 !== null && num2 === null) {
            num2 = +displayInput.textContent
        }

        if(num1 && num2){
            firstOp = PreviousOp;
            displayInput.textContent = operate(num1,num2,firstOp)
            result.textContent  = displayInput.textContent + nextOp;
            num1 =  +displayInput.textContent;
            num2 = null;
            PreviousOp = nextOp;
            return;
        }
    })
});

function operate(num1, num2, firstOp){
    switch(firstOp){
        case "+":  
            return add(num1, num2)
        case "-":   
            return subtract(num1, num2);
        case "/":   
            return divide(num1, num2);
        case "*":   
            return multiply(num1, num2);
    }
}

function add(num1 , num2){
    return num1 + num2
}

function subtract(num1 , num2){
    return num1 - num2
}

function divide(num1 , num2){
    if(num1 === 0 || num2 === 0) return alert("Are u dumb?");
    return num1 / num2
}

function multiply(num1 , num2){
    return  num1 * num2
}