'use strict';

// 1.
// let sumEven = 0;
// for (let i = 30; i <= 80; i = i + 0.5) {
// console.log(i)
// }

// 2.
// let priceOfOneDollar = 27;
// for (let dollars = 10; dollars <= 100; dollars +=10) {
//     console.log(`${priceOfOneDollar} * ${dollars} = ${priceOfOneDollar * dollars}$`);
// }

// 3.
// let num = prompt('Введіть ціле число');
// for (let i = 1; i <= 100; i++) {
//     if (i ** 2 <= num) {
//         console.log(i);
//     }
// }

// 4.
// const number = prompt('Введіть ціле число');
// let isPrime = number;
// for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// console.log(isPrime ? `${number} є простим числом.` : `${number} не є простим числом.`);

// 5.
// let someNumber = +prompt();
// let canBeObtained = false;
// let currentPower = 1;
// while (currentPower <= someNumber) {
//     currentPower *= 3;
//     if (currentPower === someNumber) {
//         canBeObtained = true;
//         break;
//     }
// }
// console.log(canBeObtained ? `Число ${someNumber} можна отримати.` : `Число ${someNumber} не можна отримати.`);