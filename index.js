'use strict';

const foo = function (numb1, numb2, sign) {
    if (isNaN(numb1) || isNaN(numb2)) {
        return console.log('Enter numb');
    }
    if (sign === 'add') {
        return console.log(`${numb1} + ${numb2} = ${numb1 + numb2}`);
    }
    if (sign === 'sub') {
        return console.log(`${numb1} - ${numb2} = ${numb1 - numb2}`);
    }
    if (sign === 'mult') {
        return console.log(`${numb1} * ${numb2} = ${numb1 * numb2}`);
    }
}
foo(2, 3, 'add');