const getSum = () => {
    let value = null;
    return function (numb) {
        if (value === null) {
            value = numb;
            return value;
        }
        value += numb;
        return value;
    };
};
const sum = getSum();
console.log(sum(4));
console.log(sum(4));
console.log(sum(4));
