// getter methods
const NumberBtn = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const result = document.querySelector('.result');
const displayInput = document.querySelector('.input');
const clearBtn = document.querySelector('.AC');
const plusMinus = document.querySelector(".plus-minus")
const dotBtn = document.querySelector(".dot");
const clear = document.querySelector('.clear')

let num1 = null;
let num2 = null;
let firstOp = null;
let PreviousOp = null
let nextOp = null
let currentDisplay = null
let isNegative = false
let negative = null;
let hasDots = false


// clear one value on the end of the string
clear.addEventListener('click', ()=>{
    const arrayClear = displayInput.textContent.split("")
    if(arrayClear.length !== null){
        arrayClear.pop();
    displayInput.textContent = arrayClear.join("");
    }
})

// clear the display Value
clearBtn.addEventListener('click', ()=>{
    displayInput.textContent = 0;
    result.textContent = "";
    dotBtn.disabled =false;
    firstOp = nextOp = PreviousOp = num1 = num2 = null;
})

// checks if displayInput has dot
dotBtn.addEventListener("click",()=>{

    if (displayInput.textContent !== 0) {
        let array = displayInput.textContent.split(",");
        if (!hasDots) {
            dotArray = array.push(".");
            displayInput.textContent = array.join("");
            hasDots = true;
        } else {
            if (displayInput.textContent.slice(-1) === ".") {
                displayInput.textContent = displayInput.textContent.replace(".", "");
                hasDots = false;
            }
        }   
    }
})

// convert the number to negative and positive
plusMinus.addEventListener('click', ()=>{
    if(!isNegative){
        negative = -Math.abs(displayInput.textContent)
        displayInput.textContent = negative
        isNegative = true;
    }else {
        const positive = Math.abs(displayInput.textContent)
        displayInput.textContent = positive
        isNegative = false;
    }
})

// change and append the value whenever user clicked number  buttons
NumberBtn.forEach(e => {
    e.addEventListener('click', ()=>{
        // if a value matches with the any of the conditions removes the value of displayInput
        if (displayInput.textContent == num1 || num1 === displayInput.textContent  || displayInput.textContent == "0" || displayInput.textContent == negative) {
            displayInput.textContent = "";
        }
        // append the button value to display value
            displayInput.textContent += e.textContent
            currentDisplay = +displayInput.textContent
    })
});

// set the value of the op to which button is pressed
operator.forEach(element =>{
    element.addEventListener('click',()=>{
        hasDots =false;

        // if firstOp is false append the button value then reassigned previous value
        if(!firstOp){
            firstOp = element.textContent;
            PreviousOp = firstOp;
            console.log(`this is first ${firstOp}`)
        }else {
            // checks if first value is true assign button value to next operator
            nextOp = element.textContent
            console.log(`this is second ${nextOp}`);
        }
        // checks if first number has number
        if(num1 === null) {
            // checks if isNegative is  true
            if(isNegative){
                num1 = negative;
            }else {
                num1 = currentDisplay; 
            }
            result.textContent = num1 +  firstOp
            return;
        }else{
            if(isNegative){
                num2 = negative;
            }else {
                num2 = currentDisplay;   
            }
            result.textContent = displayInput.textContent + firstOp
        }

        // if both numbers is true proceed of calculating
        if(num1 && num2  &&  element.textContent !== "="){
            firstOp = PreviousOp;
            displayInput.textContent = operate(num1,num2,firstOp)
            result.textContent = displayInput.textContent + nextOp;
            num1 =  currentDisplay = +displayInput.textContent;
            num2 = null;
            PreviousOp = nextOp;
            return;
        }
    })
});

// calculates if all parameters is true
equalBtn.addEventListener('click', ()=>{
    num2 = +currentDisplay;
    if(num1 && num2 && firstOp){
        displayInput.textContent = operate(num1, num2, firstOp);
        result.textContent = displayInput.textContent ;
        currentDisplay  = "";
        num1 = +result.textContent;
        firstOp = nextOp = PreviousOp =  null;
        num2 = null;
        return;
    }else{
        alert("Complete the Number first!")
        return 
    }
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
        case "%": 
            return modulo(num1, num2)
    }
}

// functions that do math calculations
function add(num1 , num2){
    return (num1 + num2).toFixed(2)
}

function subtract(num1 , num2){
    return (num1 - num2).toFixed(2)
}

function divide(num1 , num2){
    if(num1 === 0 || num2 === 0) return alert("Are u dumb?");
    return (num1 / num2).toFixed(2);
}

function multiply(num1 , num2){
    return  (num1 * num2).toFixed(2)
}

function modulo(num1, num2){
    return (num1 % num2).toFixed(2)
}