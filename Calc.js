const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimals = document.getElementById('decimal');
const clears = document.querySelectorAll('.clear');
const display = document.getElementById('display');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
    });
};

for (let i = 0; i < operators.length; i++) {
    let operationBtn = operators[i];
    operationBtn.addEventListener('click', function(e) {
    operation(e.target.textContent);
    });
};

for (let i = 0; i < clears.length; i++) {
    let clearBtn = clears[i];
    clearBtn.addEventListener('click', function(e) {
    clear(e.target.id);
    
    });
};

decimals.addEventListener('click', decimal);


function numberPress(number) {
    if (memoryNewNumber) {
        display.value = number;
        memoryNewNumber = false;
    } else {
    if (display.value === '0') {
        display.value = number;
    }
     else {
       display.value += number;
    };
};
console.log('клик по кнопке с номером ' + number)
};

function operation(oper) {
    let localMemory = display.value;
    if (memoryNewNumber && memoryPendingOperation !== '=') {
    display.value = memoryCurrentNumber;
    } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === '-') {
    memoryCurrentNumber -= parseFloat(localMemory);
    } else if (memoryPendingOperation === '+') {
    memoryCurrentNumber += parseFloat(localMemory);
    } else if (memoryPendingOperation === '*') {
    memoryCurrentNumber *= parseFloat(localMemory);
    } else if (memoryPendingOperation === '/') {
    memoryCurrentNumber /= parseFloat(localMemory);
    } else if (memoryPendingOperation === '%') {
    memoryCurrentNumber %= parseFloat(localMemory);
    } else {
    memoryCurrentNumber = parseFloat(localMemory);
    };
    display.value = memoryCurrentNumber;
    memoryPendingOperation = oper;
    };
    console.log('клик по кнопке ' + oper);
    };
 

function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        memoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        memoryNewNumber = true;
        memoryCurrentNumber = '0';
        memoryPendingOperation = '';
    };
    console.log('клик по кнопке ' + id);
};

function decimal(id) {
    let localDecimalMemory = display.value;
    if (memoryNewNumber) {
    memoryNewNumber = false;
    localDecimalMemory = '0.';
} else {
    if(localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
    };
};
    display.value = localDecimalMemory;
};

