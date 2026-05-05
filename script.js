let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput.replace(/%/g, '/100');
        let result = eval(expression);

        if (result.toString().includes('.')) {
            result = parseFloat(result.toFixed(10));
        }

        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();

        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}