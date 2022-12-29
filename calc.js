let op = "";

let numA = "";

let numB = "";

function operate() {
    return (add);
};

const add = function(numA,numB) {
	return (numA + numB);
};

const subtract = function(numA,numB) {
	return (numA - numB);
};

const divide = function(numA,numB) {
	return (numA/numB);
};

const multiply = function(numA,numB) {
    return (numA * numB);
};

const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (previousOperand.textContent == "=" || previousOperand.textContent == "÷" || previousOperand.textContent == "x" || previousOperand.textContent == "-" || previousOperand.textContent == "+") {
            previousOperand.textContent = "";
        } 
        
        previousOperand.textContent += number.textContent;

        if (op=="") {
            numA += number.textContent;
            console.log("numA is " + numA);
            return numA;
        }
        else {
            numB += number.textContent;
            console.log("numB is " + numB);
            return numB;
        }

    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        previousOperand.textContent += " " + operator.textContent + " ";
        op=operator.textContent;
        console.log(op + " " + typeof op);
    });
});
    
equalButton.addEventListener('click', ()=> {
    previousOperand.textContent = "=";
    if (numA!="" && numB!="" && op!="") {
        numA=numA*1;
        numB=numB*1;
        console.log(typeof numA + op + typeof numB );
        if (op=="÷") {currentOperand.textContent = divide(numA,numB)}
        else if (op=="-") {currentOperand.textContent = subtract(numA,numB)}
        else if (op=="+" ) {currentOperand.textContent = add(numA,numB)}
        else if (op=="x") {currentOperand.textContent = multiply(numA,numB)};
    }
})

clearButton.addEventListener('click', clear);

function clear () {
    previousOperand.textContent = "";
    currentOperand.textContent = "";
    op = "";
    numA = "";
    numB = "";
}
