'use strict';

const operator = prompt( 'Enter: add, sub, mult, div').toLowerCase();

if (operator !=='add' && operator !=='sub' && operator !=='mult' && operator !=='div') {
    alert('Something is wrong, please enter: add, sub, mult, div.');
} else {
    const operand1 = +prompt('Enter the first number');
    if (isNaN(operand1)) {
        alert('Something is wrong, please enter number.');
    } else {
        const operand2 = +prompt('Enter the second number');
        if (isNaN(operand2)) {
            alert('Something is wrong, please enter number.');
        } else {
            if (operator==='add') {
                alert(`Результат: ${operand1} + ${operand2} = ${operand1 + operand2}`);
            } else if (operator==='sub') {
                alert(`Результат: ${operand1} - ${operand2} = ${operand1 - operand2}`);
            } else if (operator==='mult') {
                alert(`Результат: ${operand1} * ${operand2} = ${operand1 * operand2}`);
            } else if (operator==='div') {
                if (operand2 !== 0) {
                    alert(`Результат: ${operand1} / ${operand2} = ${operand1 / operand2}`);
                } else {
                    alert('You can\'t divide by zero');
                }
            }
        }
    }
}