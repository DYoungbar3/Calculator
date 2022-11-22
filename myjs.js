function add(...args) {
    return args.reduce(function(first, second) {
        return first + second;
    });
}

function subtract(...args) {
    return args.reduce(function(first, second) {
        return first - second;
    });
}

function multiply(...args) {
    return args.reduce(function(first, second) {
        return first * second;
    });
}

function divide(...args) {
    return args.reduce(function(first, second) {
        return first / second;
    });
}

function operate(operator, first, second) {
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator ==='*') {
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    };
}

let first;
let second;
let operator;

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const acButton = document.querySelector('.AC');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        
    })
})