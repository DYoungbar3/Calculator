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

const keysParent = document.getElementById('keys');
const keyChildren = Array.from(keysParent.children);

const keyIds = keyChildren.map(element => {
    return element.id;
});

console.log(keyIds);