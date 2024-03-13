'use strict';


let i = 10;
let str = '';
for ( ; i < 20; i++) {

    str = str + i.toString();
    if (i < 19) {
        str = str  + ',';
    }

}
console.log(str);


for (let c = 10; c < 20; c++) {
    const a = c ** 2;
    console.log(a);
}


for (let j = 1; j < 10; j++) {
    const result = j * 7
    console.log(`${j} * 7 = ${result}`);
}


let sum = 0;
for (let b = 1; b <= 15;b++) {
 sum = sum + b;
}
console.log(sum);


let sum1 = 1;
for (let f = 15; f <= 35; f++) {
 sum1 = sum1 * f;
    console.log(sum1);
}


let sum2 = 0;
for (let z = 1; z <= 500; z++) {
    sum2 = (sum2 + z);
}
    console.log(sum2/ 500);


let sum3 = 0;
for (let v = 30; v <= 80; v++) {
    if (i % 2 === 0) {
        sum3 += v;
    }
}
console.log(sum3);


for (let r = 100; r <= 200; r++) {
    if (r % 3 === 0) {
        console.log(r);
    }
}


const num = +prompt('HW9 Напишіть натуральне число');
    for (let e = 1; e <= num; e++) {
        if (num % e === 0) {
            console.log(e);
        }
}


const num1 = +prompt('HW10 Напишіть натуральне число');
let countEvenDivisors = 0;
for (let q = 1; q <= num1; q++) {
    if (num1 % q === 0 && q % 2 === 0) {
        countEvenDivisors++;
    }
}
console.log(countEvenDivisors);


const num2 = +prompt('HW11 Напишіть натуральне число');
let sumEvenDivisors = 0;
for (let h = 1; h <= num2; h++) {
    if (num2 % h === 0 && h % 2 === 0) {
        sumEvenDivisors += h;
    }
}
console.log(sumEvenDivisors);


for (let y = 1; y < 10; y++) {
    for (let u = 1; u < 10; u++) {
        console.log(`${u} * ${y} = ${y * u}`)
    }
}