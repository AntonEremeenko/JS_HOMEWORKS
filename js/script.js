'use strict';

let age = prompt('Введіть ваш вік:');

if (age === null) {
    alert('Шкода, що Ви не захотіли ввести свій вік');
} else {
    age = +age;

    if (!isNaN(age)) {
        let word = 'років';

        if (age % 10 === 1 && age % 100 !== 11) {
            word = 'рік';
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
            word = 'роки';
        }

        alert(age + " " + word);
    } else {
        alert('Будь ласка, введіть коректне число.');
    }
}