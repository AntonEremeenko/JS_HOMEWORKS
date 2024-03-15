'use strict';

const padString = function (inputString, finalLength, symbol = '', padRight = true) {
    if (typeof inputString !== 'string') return 'відсутній рядок';
    if (typeof finalLength !== 'number') return 'відсутня цифра';
    if (typeof symbol === undefined || symbol.length !== 1) return 'відсутній cимвол';

    if (inputString.length > finalLength) {
        return inputString.slice(0, finalLength);
    }

    const padLangth = finalLength - inputString.length;
    const padding = symbol.repeat(padLangth);
    return padRight ? inputString + padding : padding + inputString;
}

console.log(padString('hello', 8, '#', true));