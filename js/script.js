const user = {
    name: 'Vova',
    lastName: 'Doe',
    age: '27',
};

const getFullName = function (prefix = 'Ms') {
    return prefix + ' ' + this.name + ' ' + this.lastName;
};
const usr1Name = getFullName.apply(user, ['Mr']);

console.log(usr1Name);

const myApply = function (f, context, args = []) {
    context.bindedFunction = f;
    return context.bindedFunction(...args);
};
console.log(myApply(getFullName, user, ['Mr']));
