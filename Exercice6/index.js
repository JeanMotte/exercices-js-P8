function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const expression = display.value;

        if (/\/\s*0(?!\d)/.test(expression)) {
            display.value = 'Division by zero is not allowed';
            return;
        }

        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Make functions available globally
window.appendToDisplay = appendToDisplay;
window.calculateResult = calculateResult;
window.clearDisplay = clearDisplay;
