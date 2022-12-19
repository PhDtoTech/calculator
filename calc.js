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


document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      display();
      clear ();
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
