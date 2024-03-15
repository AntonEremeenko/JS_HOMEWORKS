'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const filterPositiveNumbers = function (arr) {
    const positiveArr = [];

    if (arr.length === 0) {
        return 'Порожній масив';
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i]);
        }
    }

    if (positiveArr.length > 0) {
        return positiveArr;
    } else {
        return null;
    }
}

console.log(filterPositiveNumbers(arr));