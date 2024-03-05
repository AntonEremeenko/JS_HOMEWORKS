'use strict';

const operand1 = prompt('Enter the first number');

if (isNaN(operand1)) {
    alert('Something is wrong, please enter number.');
} else {
    const operand2 = prompt('Enter the second number');
    if (isNaN(operand2)) {
        alert('Something is wrong, please enter number.');
    } else {
        const result1 = `${operand1} + ${operand2} = ${Number(operand1) + Number(operand2)}`;
        const result2 = `${operand1} - ${operand2} = ${operand1 - operand2}`;
        const result3 = `${operand1} * ${operand2} = ${operand1 * operand2}`;
        const result4 = `${operand1} / ${operand2} = ${operand1 / operand2}`;

        const result5 = `
    ${result1}
    ${result2}
    ${result3}
    ${result4}`

        alert(result5);
    }
}