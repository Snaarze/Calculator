// getter methods
const NumberBtn = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const result = document.querySelector('.result');
const displayInput = document.querySelector('.input');
const clearBtn = document.querySelector('.AC');


let num1 = null;
let num2 = null;
let firstOp = null;
let PreviousOp = null
let nextOp = null
let currentDisplay = null


// clear the display Value
clearBtn.addEventListener('click', ()=>{
    displayInput.textContent = "";
    result.textContent = "";
})

// change and append the value whenever user clicked number  buttons
NumberBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        // if a value matches with the any of the conditions removes the value of displayInput
        if (displayInput.textContent === "0" || displayInput.textContent == num1 || num1 === displayInput.text) {
            displayInput.textContent = "";
        }
        // append the button value to display value
            displayInput.textContent += e.textContent
            currentDisplay = displayInput.textContent
    })
});



// set the value of the op to which button is pressed
operator.forEach(element =>{
    element.addEventListener('click',()=>{
        // if firstOp is false append the button value then reassigned previous value
        if(!firstOp){
            firstOp= element.textContent;
            PreviousOp = firstOp;
            console.log(`this is first ${firstOp}`)
        }else {
            // checks if first value is true assign button value to next operator
            nextOp = element.textContent
            console.log(`this is second ${nextOp}`);
        }
        // checks if first number has number
        if(num1 === null) {
            num1 = +currentDisplay;
            return;
        }else{
            num2 = +currentDisplay;
        }
        // if both numbers is true proceed of calculating
        if(num1 && num2 &&  element.textContent !== "="){
            firstOp = PreviousOp;
            displayInput.textContent = operate(num1,num2,firstOp)
            result.textContent  = displayInput.textContent + nextOp;
            num1 =  +displayInput.textContent;
            num2 = null;
            PreviousOp = nextOp;
            return;
        }

        // if was calculate  by zero
        if(num1 === 0 || num2 === 0 && element.textContent === "/" || element.textContent === "*") {
            firstOp = PreviousOp = nextOp = null;
        }
    })
});
// calculates if all parameters is true
equalBtn.addEventListener('click', ()=>{
    num2 = +currentDisplay;
    displayInput.textContent = operate(num1, num2, firstOp);
    result.textContent = displayInput.textContent;
    currentDisplay  = "";
    num1 = +result.textContent;
    num2 = null;
})



// a function do math calculations depending on the selected operators and returns a value;
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


// functions that do math calculations
function add(num1 , num2){
    return num1 + num2
}

function subtract(num1 , num2){
    return num1 - num2
}

function divide(num1 , num2){
    if(num1 === 0 || num2 === 0) return alert("Are u dumb?");
    return (num1 / num2).toFixed(2);
}

function multiply(num1 , num2){
    return  num1 * num2
}