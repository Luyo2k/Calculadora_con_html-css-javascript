let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.calculator-display');
    if (display) {
        display.textContent = displayValue;
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const display = document.createElement('div');
    display.className = 'calculator-display';
    display.style.height = '25px';
    display.style.marginBottom = '10px';
    display.style.fontSize = '24px';
    display.style.border = '1px solid #ccc';
    display.style.borderRadius = '5px';
    display.style.padding = '10px';
    display.style.backgroundColor = '#fff';
    display.style.boxShadow = 'inset 0px 0px 20px rgb(243, 237, 237)';
 
    display.style.backgroundColor = 'gray';
    calculator.insertBefore(display, calculator.firstChild);
    updateDisplay();
});
