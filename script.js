const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', (e) => {
    const key = e.target;
    const keyContent = key.textContent;
    const action = key.dataset.action;
    const displayedNum = display.textContent;

    if (!action) {
        if (displayedNum === '0') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
    }

    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide') {
        console.log('It is an operation');
    }

    if (action === 'decimal') {
        console.log('It is decimal point');
    }

    if (action === 'clear') {
        console.log('It is delete button');
    }

    if (action === 'calculate') {
        console.log('It is to calculate');
    }

})

