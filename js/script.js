'use strict';

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    sum += i;
}

console.log("Сума непарних чисел від 1 до 20: ", sum);