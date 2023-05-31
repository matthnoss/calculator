//functions for adding, subtracting, dividing, and multiplying

function adding(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) + parseFloat(secondNumber);
    return result;
}

function subtracting(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) - parseFloat(secondNumber);
    return result;
}

function multiplying(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) * parseFloat(secondNumber);
    return result;
}

function deviding(firstNumber, secondNumber) {
    let result = parseFloat(firstNumber) / parseFloat(secondNumber);
    return result;
}

//function to operate calculator

function operate(firstNumber, secondNumber, operator) {
    let result;
    if (operator === '+') {
        result = adding(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = subtracting(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = multiplying(firstNumber, secondNumber);
    } else if (operator === '/') {
        result = deviding(firstNumber, secondNumber);
    }
    return result;
}

//onclick

const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('calcDisplay');
const deleteButton = document.querySelector('.deleteBtn');
let firstNumber = 0;
let secondNumber = 0;
let operation;

buttons.forEach((currentButton) => {
    currentButton.addEventListener('click', () => {
        typeNumber(currentButton)})
})

//delete button

deleteButton.addEventListener('click', () => {
    if(display.textContent !== '0') {
        let text = display.textContent;
        text = text.slice(0, -1);
        display.textContent = text;
    }
    if(display.textContent.length === 0) {
        clearDisplay('0');
    }
})

function typeNumber(currentButton) {
    if(display.textContent === '0' && currentButton.textContent === '.') {
        display.textContent += currentButton.textContent;
    } else if(display.textContent.includes('.') && currentButton.textContent === '.') {

    } else if(display.textContent === '0') {
        clearDisplay();
        display.textContent += currentButton.textContent;
    } else {
        display.textContent += currentButton.textContent;
    }
    
}

function clearDisplay(input) {
    if (input === null) {
        display.textContent = '';
    } else {
        display.textContent = input;
    }
    
}

//clear button functionality
const clearButton = document.querySelector('.clearBtn')

clearButton.addEventListener('click', () => {
    clearDisplay(0);
    firstNumber = '0';
    secondNumber = '0';
})


//operation buttons
const operationButtons = document.querySelectorAll('.operationBtn');

operationButtons.forEach((currentButton) => {
    currentButton.addEventListener('click', () => {
        operationButtonPressed(currentButton);
    })
})

let lastOperation = '0';

//operating function
function operationButtonPressed(input) {
    lastOperation = operation;
    operation = input.textContent;

    if(lastOperation == '0') {
        lastOperation = input.textContent;
    }
    let result;
    

    if (firstNumber == '0'){
        firstNumber = display.textContent;
        clearDisplay('0');
    } else if (secondNumber == '0') {
        if (firstNumber != '0' && display.textContent != '0') {
            secondNumber = display.textContent;
            clearDisplay('0');
        } else {
            firstNumber = display.textContent;
            clearDisplay('0');
        }
    } 

    if (firstNumber != '0' && secondNumber != '0') {
        console.log('cond.')
        result = operate(firstNumber, secondNumber, lastOperation);
        console.log(result);
        firstNumber = result;
        secondNumber = '0';
    }

}

//equals button

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    secondNumber = display.textContent;
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operation);

    if (secondNumber == 0 && operation == '/') {
        clearDisplay("Cannot divide by zero.");
        firstNumber, secondNumber = '0';
    } else if (firstNumber == '0' || secondNumber == '0') {

    } else {
        let result = operate(firstNumber, secondNumber, operation);
        console.log(result);
        result = Number(result.toFixed(5));
        clearDisplay(result);
    }


    
})