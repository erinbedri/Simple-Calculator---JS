const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
const previousDisplay = calculator.querySelector('.calculator__previousDisplay');

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const keyContent = key.textContent;
        const action = key.dataset.action;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            if (firstValue && operator && previousKeyType !== 'operator') {
                display.textContent = calculate(firstValue, operator, secondValue)
            }

            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear';
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
            previousDisplay.textContent = firstValue + ' ' + getOperator(operator) + ' ' + secondValue;

            calculator.dataset.previousKeyType = 'calculate';
        }

        Array.from(key.parentNode.children)
            .forEach(k => { k.classList.remove('is-depressed') });

        function calculate(n1, operator, n2) {
            let result = '';
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);

            if (operator === 'add') {
                result = n1 + n2;
            } else if (operator === 'subtract') {
                result = n1 - n2;
            } else if (operator === 'multiply') {
                result = n1 * n2;
            } else if (operator === 'divide') {
                if (n2 === 0) {
                    result = 'Zero Division!';
                } else {
                    result = n1 / n2;
                }
            }
            return result;
        }

        function getOperator(operator) {
            let result = '';

            if (operator === 'add') {
                result = '+';
            } else if (operator === 'subtract') {
                result = '-';
            } else if (operator === 'multiply') {
                result = '\u{000D7}';
            } else if (operator === 'divide') {
                result = '/'
            }
            return result;
        }

    }

})

