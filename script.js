const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', (e) => {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
        console.log('It is a number');
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

