const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

let currentOperand = "";

let previousOperand = "";

let operation = 

function operate() {
    return (op);
};

function clear () {
    previousOperandTextElement.textContent = "";
    currentOperandTextElement.textContent = "";
    operation = undefined;
    previousOperand = "";
    currentOperand = "";
}

function appendNumber (number) {
    if (number === "." && currentOperand.includes('.')) return
    currentOperand = currentOperand.toString() + number.toString()
   
}

function chooseOperation (operation) {
    if (currentOperand === "") return
    if (previousOperand !== "") {
        compute()
    }
    thisOperation = operation
    previousOperand = currentOperand
    currentOperand = ""
    return operation
 
}

function compute () {
    let computation
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    console.log(current, prev, operation)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case 'x':
            computation = prev * current
            break   
        case '÷':
            computation = prev / current
            break
        default: 
            return   
    }

    currentOperand = computation
    operation = undefined
    previousOperand = ""
    

}

function updateDisplay () {
    currentOperandTextElement.textContent = currentOperand;
    previousOperandTextElement.textContent = previousOperand;
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        appendNumber(number.textContent);
        updateDisplay();
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        chooseOperation(operator.textContent)
        updateDisplay()
    });
});
    
equalButton.addEventListener('click', ()=> {
    compute ();
    updateDisplay ();
    })

clearButton.addEventListener('click', clear);


