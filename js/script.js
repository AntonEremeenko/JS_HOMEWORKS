'use strict';

const indexOf = function (arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) return i;
    }
    return -1;
};
console.log(indexOf([2, 5, 9], 9));

const lastIndexOf = function (str, substr, index = str.length) {
    if (index < 0) {
        index = 0;
    }
    if (index >= str.length) {
        index = str.length - 1;
    }
    for (let i = index; i >= 0; i--) {
        if (str.substring(i, i + substr.length) === substr) return i;
    }
    return -1;
};
console.log(lastIndexOf('канал', 'ан'));

function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

const find = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) return arr[i];
    }
    return undefined;
};

console.log(find([4, 6, 8, 12], isPrime));
console.log(find([4, 5, 8, 12], isPrime));

const findIndex = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) return i;
    }
    return -1;
};

console.log(findIndex([4, 6, 8, 12], isPrime));
console.log(findIndex([4, 6, 7, 12], isPrime));

const includes = function (arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true;
    }
    return false;
};

const array1 = [1, 2, 3];
const pets = ['cat', 'dog', 'bat'];

console.log(includes(array1, 2));
console.log(includes(pets, 'cat'));

const isBigEnough = function (element) {
    return element >= 10;
};
const every = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === false) return false;
    }
    return true;
};

console.log(every([12, 5, 8, 130, 44], isBigEnough));
console.log(every([12, 54, 18, 130, 44], isBigEnough));

function isBiggerThan10(element) {
    return element > 10;
}
const some = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) return true;
    }
    return false;
};

console.log(some([2, 5, 8, 1, 4], isBiggerThan10));
console.log(some([12, 5, 8, 1, 4], isBiggerThan10));
