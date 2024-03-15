'use strict';

const number = +prompt('Enter number');
const power = +prompt('Enter power');

const numberPower = function (number, power = 1) {
    if (isNaN(number) || isNaN(power)) {
        return 'помилка';
    } else {
        return Math.pow(number, power);
    }
}
const result = numberPower(number, power);
alert(result);