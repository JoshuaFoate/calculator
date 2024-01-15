// Math operation functions

function add(a, b) {
    let sum = +a + +b;
    return sum;
}

function subtract(a, b) {
    let sum = a - b;
    return sum;
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function divide(a, b) {
    if (b === '0') {
        return alert("YOU CAN'T DIVIDE BY 0 DUMMY");
    }
    else {
        let product = a / b;
        return product.toFixed(3);
    }
}

//////////////////////////

// Variables for operation

let firstNumber;
let operator;
let secondNumber;

//////////////////////////

// Operate Function

function operate(number1, number2, op) {
    if (op === '+') {
        let answer = add(number1, number2);
        firstNumber = answer;
        return display(answer);
    }
    else if (op === '-') {
        let answer = subtract(number1, number2);
        firstNumber = answer;
        return display(answer);
    }
    else if (op === 'x') {
        let answer = multiply(number1, number2);
        firstNumber = answer;
        return display(answer);
    }
    else if (op === '/') {
        let answer = divide(number1, number2);
        firstNumber = answer;
        return display(answer);
    }
}

//////////////////////////

// Button on-click functions

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (isNaN(button.id) === false) {
            if (isNaN(firstNumber) === true) {
                firstNumber = button.id;
                console.log("hi");
                display(firstNumber)
            }
            else if (operator === undefined) {
                firstNumber = firstNumber + button.id;
                console.log("hello")
                display(firstNumber);
            }
            else if (operator !== undefined) {
                if (isNaN(secondNumber) === true) {
                    secondNumber = button.id;
                    console.log("hya");
                    display(secondNumber)
                }
                else {
                    secondNumber = secondNumber + button.id;
                    console.log("himasdf");
                    display(secondNumber);
                }
            }
        }
        else {
            if (isNaN(secondNumber) === true && (button.id === '+' || button.id === '-' || button.id === 'x' || button.id === '/')) {
                operator = button.id;
            }
            else if (button.id === '=') {
                operate(firstNumber, secondNumber, operator);      
            }
            else if (button.id === 'clearButton') {
                body.removeChild(displayNumber);
                operator = undefined;
                firstNumber = NaN;
                secondNumber = NaN;
            }
            else if (isNaN(secondNumber) === false && (button.id === '+' || button.id === '-' || button.id === 'x' || button.id === '/')) {
                operate(firstNumber, secondNumber, operator);
                operator = button.id;
                secondNumber = NaN;
            }
        }
    });
});

//////////////////////////

// Display function

const body = document.querySelector('body')
displayNumber = document.createElement('div');
displayNumber.classList.add('display');
function display(number) {
    displayNumber.textContent = number;
    body.appendChild(displayNumber);
    return number;
}

//////////////////////////