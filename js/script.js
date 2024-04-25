(function () {
    const getSum = (numb) => {
        let result = numb;

        return (value) => {
            result += value;
            return result;
        };
    };
    const sum = getSum(10);
    console.log(sum(20));
})();
