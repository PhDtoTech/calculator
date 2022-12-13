function operate(operator, a, b) {
    return (operator(a,b));
};

const add = function(a,b) {
	return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const divide = function(a,b) {
	return (a/b);
};

const multiply = function(a,b) {
    return (a * b);
};




function display() {
    const entry = document.getElementById("entry");

    const numbers = document.querySelectorAll(".num");

    const operators = document.querySelectorAll(".op");

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            console.log (number.textContent);
            entry.textContent += number.textContent;
        });
    });

    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            console.log (operator.textContent);
            entry.textContent = operator.textContent;
        });
    });

}

function clear () {
    const clear = document.getElementById("clear");

    clear.addEventListener('click', () => {
        entry.textContent = null;
    });
}



// let firstNumber = 





/* function display () {
    const numberButtons = document.querySelectorAll('.num');
  
    numberButtons.forEach(numberButton => {
      numberButton.addEventListener('click', () => {
        console.log (numberButton.textContent);
        document.getElementById("entry").textContent= numberButton.textContent;
      });
    });

    const displayValue = numberButtons.textContent;

    return displayValue;
  } */

  /* const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log (button.textContent);
      document.getElementById("entry").textContent= button.textContent;
    });
  }); */

