'use strict';

// 1.
// let x = 10, y = 7;
// let result = x > y ? 'x більше за y' : 'x не більше, ніж y';

// 2.
// const a = prompt('Введіть ціле число');
//
// if (!Number.isInteger(+a)) {
//     console.log('Це не ціле число');
// } else {
//     let b = null;
//     if (a.length === 1 && a >= 0) {
//         b = 'однозначне позитивне';
//     } else if (a.length === 2 && a >= 0) {
//         b = 'двоцифрове позитивне';
//     } else if (a.length === 3 && a >= 0) {
//         b = 'трицифрове позитивне';
//     } else if (a.length > 3 && a >= 0) {
//         b = 'багатоцифрове позитивне';
//     } else {
//         if (a.length - 1 === 1 && a < 0) {
//             b = 'однозначне негативне';
//         } else if (a.length - 1 === 2 && a < 0) {
//             b = 'двоцифрове негативне';
//         } else if (a.length - 1 === 3 && a < 0) {
//             b = 'трицифрове негативне';
//         } else if (a.length - 1 > 3 && a < 0) {
//             b = 'багатоцифрове негативне';
//         }
//     }
//     console.log('Число', a, b);
// }

// 3.
// const operand1 = +prompt('Введіть перше число');
//
// if (isNaN(operand1)) {
//     console.log('Це не число');
// } else {
//     const operand2 = +prompt('Введіть друге число');
//     if (isNaN(operand2)) {
//         console.log('Це не число');
//     } else {
//         const operand3 = +prompt('Введіть третє число');
//         if (isNaN(operand3)) {
//             console.log('Це не число');
//         } else {
//             if (operand1 >= operand2 && operand1 >= operand3) {
//                 console.log(operand1);
//             } else {
//                 if (operand2 >= operand1 && operand2 >= operand3) {
//                     console.log(operand2);
//             } else {
//                     if (operand3 >= operand1 && operand3 >= operand2) {
//                         console.log(operand3);
//                     }
//                 }
//             }
//         }
//     }
// }

// 4.
// const side1 = +prompt('Введіть перше число');
//
// if (isNaN(side1)) {
//     console.log('Це не число');
// } else {
//     const side2 = +prompt('Введіть друге число');
//     if (isNaN(side2)) {
//         console.log('Це не число');
//     } else {
//         const side3 = +prompt('Введіть третє число');
//         if (isNaN(side3)) {
//             console.log('Це не число');
//         } else {
//             if (((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3) > side1)) {
//                 console.log('Трикутник може існувати');
//             } else {
//                 console.log('Трикутник не може існувати');
//             }
//         }
//     }
// }