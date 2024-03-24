'use strict';

// 1.
const arr = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`);

// 2.
const arr1 = [2, 5, 3, 9];
const sumFirstHalf = arr1[0] * arr1[1];
const sumSecondHalf = arr1[2] * arr1[3];
const result = sumFirstHalf + sumSecondHalf;
console.log(result);

// 3.
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2[1][0]);

// 4.
const object =  {
    js : ['jQuery', 'Angular'],
    php : 'hello',
    css: 'world'
};
console.log(object.js[0]);

// 5.
const arr3 = [];
let x = 'x'
for (let i = 0; i < 10; i++) {
    arr3.push(x);
    x += 'x';
}
console.log(arr3)

// 6.
const arr4 = [];
for (let i = 1; i < 10; i++) {
    arr4.push(`${i}`.repeat(i));
}
console.log(arr4)

// 7.
const arr5 = [];
const arrayFill = function (arr, value = '#', amount) {
    for (let i = 1; i < amount; i++) {
        arr.push(value);
    }
    return arr.push(value);
}
arrayFill(arr5, '*', 4)
console.log(arr5);

// 8.
const arr6 = [5, 2, 1, 3, 6, 7];
let sumArr6 = 0;
for (let i = 0; i < arr6.length; i++) {
    sumArr6 += arr6[i];
    if (sumArr6 > 10) {
        console.log(i + 1)
        break
    }
}

// 9.
const reverse = function (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const currentElement = arr[i];
        arr[i] = arr[arr.length - (1 + i)];
        arr[arr.length - (1 + i)] = currentElement;
    }
    return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));

// 10.
const arr7 = [[1, 2, 3], [4, 5], [6], 5];
const sumArr = function (element) {
    if (typeof element === "number") {
        return element;
    }
    if (Array.isArray(element)) {
        return element.reduce((sum, element) => sum + sumArr(element), 0);
    }
    return 0;
}
console.log(sumArr(arr7));

// function fib(num) {
//     if (num === 0){
//         return 0;
//     }
//    return  fib(num - 1) + num;
// }
// console.log(fib(3))

// 11.
const arr8 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(sumArr(arr8));