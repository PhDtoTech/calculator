# calculator
Calculator assignment for The Odin Project
A project from [The Odin Project - Foundations Course](https://www.theodinproject.com/lessons/foundations-calculator)

# Live Preview
[Click here.](https://phdtotech.github.io/calculator/)

# Learning Outcomes
  - Deepened knowledge of objects.
  - Improved CSS Grid understanding and usage.
  - Improved code structure and code readability.
  - Improved clean code writing.

# Goals
Combine everything I've learned so far using JavaScript, HTML, and CSS. Build a browser version of a calculator.

Steps to make it happen:
  1. Create a calculator-grid with buttons for numbers and operators.
  2. Add functionality to populate display when buttons are clicked.
  3. Create functions for basic operations.
  4. Store number values and operator and create a function to operate with them.
  5. Create function to clear values and display.

# Problem Solving
## Understanding the problem
The first thing I need to do is create the Calculator div and buttons in the HTML file. These buttons should have classes according to their functionality. These classes will help me style them with CSS but also add functionality with JavaScript.
Then I will style the calculator (following Apple's Macbook calculator) using CSS and adding hover effects.
Lastly, I will create the functions needed to populate the display, clear the calculator, store values, and operate with JavaScript.

## Plan
  1. Create calculator div and buttons in HTML
  2. Style calculator and buttons with CSS using grid
  3. Add hover styles with CSS 
  4. Declare variables for DOM elements that I will use in js
  5. Create functions for basic operations with js
      - Include error message when trying to divide by zero
  6. Create clear function and add functionality to button with js
      - On click, clear values and display
  7. Add click event listeners to buttons and populate display
      - Create function that populates display
  8. Create compute function which stores values (numbers and operator) with js
      - When user clicks on numbers, concatenate them as a string
      - When user clicks on operator, store numbers as "numA" and store operator as "op"
      - When user clicks on more numbers, concatenate then as a string
      - When user clicks equal or an operator, store numbers as "numB" and store operator as "newOp"
  9. Create function to roung answers

# Self-check
- [x] Create functions for all of the basic math operators
    - [x] add
    - [x] subtract
    - [x] multiply
    - [x] divide
- [ ] Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
- [x] Create a basic HTML calculator
    - [x] buttons for each digit
    - [x] buttons for each operator
    - [x] equals button
    - [x] display
    - [x] clear button
- [x] Create the functions that populate the display when you click the number buttons.
- [x] Store the ‘display value’ in a variable.
- [x] Store the operation that has been chosen.
- [x] Operate() on them when the user presses the “=” key.
- [ ] Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time.
- [ ] Your calculator should not evaluate more than a single pair of numbers at a time. 
- [ ] You should round answers with long decimals so that they don’t overflow the screen.
- [ ] Pressing = before entering all of the numbers or an operator could cause problems!
- [x] Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
- [ ] Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

## Extra Credit

- [ ] Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! 
- [x] Make it look nice! 
- [ ] Add a “backspace” button.
- [ ] Add keyboard support! 