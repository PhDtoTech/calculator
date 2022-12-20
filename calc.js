function operate(op, numA, numB) {
    return (op(numA,numB));
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

let op = "";

let numA = "";

let numB = "";

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      display();
      clear ();
      saveNums ();
    }
  });


function display() {
    
    const entry = document.getElementById("entry");
    const numbers = document.querySelectorAll(".num");
    const operators = document.querySelectorAll(".op");

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if (entry.textContent == "=" || entry.textContent == "÷" || entry.textContent == "x" || entry.textContent == "-" || entry.textContent == "+") {
                entry.textContent = "";
            } 
            
            entry.textContent += number.textContent;

        });
    });

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            entry.textContent = operator.textContent;
        });
    });
    

}


function clear () {
    const entry = document.getElementById("entry");
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', clear);
    entry.textContent = "";
}

function saveNums () {
    const numbers = document.querySelectorAll(".num");
    const operators = document.querySelectorAll(".op");
    const equalButton = document.getElementById("equal");

    numbers.forEach(number => {
        number.addEventListener('click', () => {
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
        })}
    )

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
                return operator.textContent=="÷"? op=divide
                      : operator.textContent=="-" ? op=subtract
                      : operator.textContent=="+" ? op=add
                      : op=multiply;
        });
    });

    equalButton.addEventListener('click', () =>{
        if (numA!="" && numB!="" && op!="") {
            numA=numA*1;
            numB=numB*1;
            console.log((typeof numA)+ numA);
            console.log((typeof numB)+ numB);
            operate (op,numA, numB);
        }
    })
}
