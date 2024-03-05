'use strict';

const operand1 = prompt('Enter the first number');
if (isNaN(operand1)) {
    alert('Something is wrong, please enter number');
} else {
    const operand2 = prompt('Enter the second number');
    if (isNaN(operand2)) {
        alert('Something is wrong, please enter number');
    } else {
        const operand3 = prompt('Enter the third number');
        if (isNaN(operand3)) {
            alert('Something is wrong, please enter number');
        } else {
            const result = (Number(operand1) + Number(operand2) + Number(operand3)) / 3;
            alert(result);
        }
    }
}