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


function display () {
    const numberButtons = document.querySelectorAll('.num');
  
    numberButtons.forEach(numberButton => {
      numberButton.addEventListener('click', () => {
        console.log (numberButton.textContent);
        document.getElementById("entry").textContent= numberButton.textContent;
      });
    });

    const displayValue = numberButtons.textContent;

    return displayValue;
  }