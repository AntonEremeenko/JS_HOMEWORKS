import Cache from './Cache.js';

const slowFunction = (num) => {
    console.log(`Processing ${num}`);
    return num * 2;
};

const cachedSlowFunction = Cache(slowFunction);

console.log(cachedSlowFunction(5));
console.log(cachedSlowFunction(5));
console.log(cachedSlowFunction(8));
console.log(cachedSlowFunction(8));
console.log(cachedSlowFunction(10));
console.log(cachedSlowFunction(10));
