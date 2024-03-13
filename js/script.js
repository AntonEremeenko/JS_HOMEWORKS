'use strict';

// 1.
// let i = 10;
// let str = '';
// for ( ; i < 20; i++) {
//
//     str = str + i.toString();
//     if (i < 19) {
//         str = str  + ',';
//     }
//
// }
// console.log(str);

// 2.
// for (let i = 10; i < 20; i++) {
//     const a = i ** 2;
//     console.log(a);
// }

// 3.
// for (let i = 1; i < 10; i++) {
//     const result = i * 7
//     console.log(`${i} * 7 = ${result}`);
// }

// 4.
// let sum = 0;
// for (let i = 1; i <= 15; i++) {
//  sum = sum + i;
// }
// console.log(sum);

// 5.
// let sum = 1;
// for (let i = 15; i <= 35; i++) {
//  sum = sum * i;
//     console.log(sum);
// }

// 6.
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum = (sum + i);
// }
//     console.log(sum / 500);

// 7.
// let sum = 0;
// for (let i = 30; i <= 80; i ++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 8.
// for (let i = 100; i <= 200; i ++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// 9.
// const num = +prompt('Напишіть натуральне число');
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             console.log(i);
//         }
// }

// 10.
// const num = +prompt('Напишіть натуральне число');
// let countEvenDivisors = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         countEvenDivisors++;
//     }
// }
// console.log(countEvenDivisors);

// 11.
// const num = +prompt('Напишіть натуральне число');
// let sumEvenDivisors = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0 && i % 2 === 0) {
//         sumEvenDivisors += i;
//     }
// }
// console.log(sumEvenDivisors);

// 12.
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${j} * ${i} = ${i * j}`)
//     }
// }