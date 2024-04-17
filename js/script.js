const user = {
    name: 'Vova',
    lastName: 'Doe',
    age: '27',
};

const getFullName = function (prefix = 'Ms') {
    return prefix + ' ' + this.name + ' ' + this.lastName;
};

const usr1Name = getFullName.bind(user, 'Mr');

console.log(usr1Name());

function myBind(f, context, ...preArgs) {
    return function (...args) {
        preArgs = preArgs.concat(args);
        context.blindedFunction = f;
        return context.blindedFunction(...preArgs);
    };
}

const usr2Name = myBind(getFullName, user, 'Mr');

console.log(usr2Name());
