//getter methods
const numberBtn = document.querySelectorAll('.num');
const inputText = document.querySelector('.input');
const clearBtn =document.querySelector('.AC');
const equalBtn = document.querySelector(".equal");
const operatorBtn = document.querySelectorAll(".operator")
const resultOf = document.querySelector('.result');
const plusBtn = document.querySelector('.plus')

let num1 = 0;
let num2 = 0;
let selectedOperator = "";

//update the inputText display
numberBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        if(inputText.textContent === "0") inputText.textContent = "";
        inputText.textContent += btn.textContent;
    })
})

//append the value depending on which button is clicked
operatorBtn.forEach(btn =>{
    btn.addEventListener('click', () => {
        selectedOperator = btn.textContent
        num1 = +inputText.textContent;
        inputText.textContent = "";
    })
})


//calculate the numbers depending on the SelectedOperator
function operate(num1, num2 , selectedOperator){
    num2 = +inputText.textContent
    let result ="";

    if(num1 == "") return alert("Please input number first");
    if(num1 === "" || num2 === "" && selectedOperator === "/"){
        return alert("Cannot be divided by 0")
    }
   if(num1){
   switch(selectedOperator){
    case "+":
        inputText.textContent = result = +num1 + +num2;
        resultOf.textContent = inputText.textContent
        break;
    case "-":
        inputText.textContent = result = +num1 - +num2;
        resultOf.textContent = inputText.textContent
        break;
    case "*":
        inputText.textContent = result = +num1 * +num2;
        resultOf.textContent = inputText.textContent
        break;
    case "/":
        inputText.textContent = result = +num1 / +num2;
        resultOf.textContent = inputText.textContent
        break;
   }
   }
   num1 = num2 = "";
   return result
}
// when clicked it operate the funtions
equalBtn.addEventListener('click', ( ) => {
    operate(num1, num2, selectedOperator)
});


//clear display
clearBtn.addEventListener('click', ()=>{
    inputText.textContent = 0;
    resultOf.textContent = "ans";
})
