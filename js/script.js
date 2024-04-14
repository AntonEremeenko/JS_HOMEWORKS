const factorial = function (n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log(factorial(3));

const pow = function (num, deg) {
    if (deg === 0) return 1;
    return num * pow(num, deg - 1);
};

console.log(pow(2, 5));

const sum = function (a, b) {
    if (b < 0 || a < 0) return 0;
    if (b === 0) return a;
    return sum(++a, b - 1);
};
console.log(sum(2, 5));
