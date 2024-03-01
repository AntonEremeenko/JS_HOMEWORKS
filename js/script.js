'use strict';

const operand1 = +prompt('Enter the first number:');
const operand2 = +prompt('Enter second number:');

if (!isNaN(operand1) && !isNaN(operand2)) {

    console.log(`Результат: ${operand1} + ${operand2} = ${operand1 + operand2}`);
    console.log(`Результат: ${operand1} - ${operand2} = ${operand1 - operand2}`);
    console.log(`Результат: ${operand1} * ${operand2} = ${operand1 * operand2}`);
    console.log(`Результат: ${operand1} / ${operand2} = ${operand1 / operand2}`);
} else {
    console.log('Something is wrong, please enter numbers.');
}