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

function deleteCharacter() {
    if (display.textContent !== '0') {
        let text = display.textContent;
        text = text.slice(0, -1);
        display.textContent = text;
    }
    if (display.textContent.length === 0) {
        clearDisplay('0');
    }
}

function typeNumber(input) {
    let textValue;

    if (input.textContent == undefined) {
        textValue = input;
    } else {
        textValue = input.textContent;
    }

    if (display.textContent.length < 16) {
        if (display.textContent === '0' && textValue === '.') {
            display.textContent += textValue;
        } else if (display.textContent.includes('.') && textValue === '.') {

        } else if (display.textContent === '0') {
            clearDisplay();
            display.textContent += textValue;
        } else {
            display.textContent += textValue;
        }
    }


}

function clearDisplay(input) {
    if (input === null) {
        display.textContent = '';
    } else {
        display.textContent = input;
    }

}

function clearValues() {
    clearDisplay(0);
    firstNumber = '0';
    secondNumber = '0';
    operation = '0';
    lastOperation = '0';
}


//operating function
function operationButtonPressed(input) {
    lastOperation = operation;

    if (input.textContent == undefined) {
        operation = input;
    } else {
        operation = input.textContent;
    }

    if (lastOperation == '0') {
        lastOperation = input.textContent;
    }
    let result;


    if (firstNumber == '0') {
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

function equalsButtonFunc() {
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
        typeNumber(currentButton)
    })
})

document.addEventListener('keyup', (KeyboardEvent) => {
    let keyStroke = KeyboardEvent.key;
    if (keyStroke >= 0 && keyStroke <= 9) {
        typeNumber(keyStroke);
    }

    switch (keyStroke.toLowerCase()) {
        case '+':
            operationButtonPressed(keyStroke);
            break;
        case '-':
            operationButtonPressed(keyStroke);
            break;
        case '*':
            operationButtonPressed(keyStroke);
            break;
        case '/':
            operationButtonPressed(keyStroke);
            break;
        case 'enter':
            equalsButtonFunc();
            break;
        case '=':
            equalsButtonFunc();
            break;
        case '.':
            typeNumber(keyStroke);
            break;
        case 'backspace':
            deleteCharacter();
            break;
        case 'c':
            clearValues();
            break;
        default:
            console.log(keyStroke);
            console.log('no');
    }
})

//delete button

deleteButton.addEventListener('click', () => {
    deleteCharacter();
})




//function for entering numbers via keyboard





//clear button functionality
const clearButton = document.querySelector('.clearBtn')

clearButton.addEventListener('click', () => {
    clearValues();
})




//operation buttons
const operationButtons = document.querySelectorAll('.operationBtn');

operationButtons.forEach((currentButton) => {
    currentButton.addEventListener('click', () => {
        operationButtonPressed(currentButton);
    })
})

let lastOperation = '0';



//equals button

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    equalsButtonFunc();

})

