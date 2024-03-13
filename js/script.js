'use strict';


let sumEven = 0;
for (let i1 = 30; i1 <= 80; i1 = i1 + 0.5) {
console.log(i1)
}


let priceOfOneDollar = 27;
for (let dollars = 10; dollars <= 100; dollars +=10) {
    console.log(`${priceOfOneDollar} * ${dollars} = ${priceOfOneDollar * dollars}$`);
}


let num = +prompt('Ex3 Введіть ціле число');
for (let i2 = 1; i2 <= 100; i2++) {
    if (i2 ** 2 <= num) {
        console.log(i2);
    }
}


const number = +prompt('Ex4 Введіть ціле число');
let isPrime = number;
for (let i3 = 2; i3 < number; i3++) {
    if (number % i3 === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? `${number} є простим числом.` : `${number} не є простим числом.`);


let someNumber = +prompt();
let canBeObtained = false;
let currentPower = 1;
while (currentPower <= someNumber) {
    currentPower *= 3;
    if (currentPower === someNumber) {
        canBeObtained = true;
        break;
    }
}
console.log(canBeObtained ? `Число ${someNumber} можна отримати.` : `Число ${someNumber} не можна отримати.`);