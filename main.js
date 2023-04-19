//functions for adding, subtracting, dividing, and multiplying

function adding(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) + parseInt(secondNumber);
    return result;
}

function subtracting(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) - parseInt(secondNumber);
    return result;
}

function multiplying(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) * parseInt(secondNumber);
    return result;
}

function deviding(firstNumber, secondNumber) {
    let result = parseInt(firstNumber) / parseInt(secondNumber);
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