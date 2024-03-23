'use strict';

// 1.
const arr1 =  [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 2.
let arr4 =  [1, 2, 3];
arr4.reverse();
console.log(arr4);

// 3.
let arr5 =  [1, 2, 3];
arr5.push(4, 5, 6);
console.log(arr5);

// 4.
let arr6 =  [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);

// 5.
const arr7 =  ['js','css', 'jq'];
console.log(arr7[0]);

// 6.
const arr8 =  ['js','css', 'jq'];
console.log(arr8[arr8.length - 1]);

// 7.
const arr9 =  [1, 2, 3, 4, 5];
const arr10 = arr9.slice(0,3);
console.log(arr10);

// 8.
const arr11 =  [1, 2, 3, 4, 5];
const arr12 = arr9.slice(3,5);
console.log(arr12);

// 9.
let arr13 =  [1, 2, 3, 4, 5];
arr13.splice(1,2);
console.log(arr13);

// 10.
const arr14 =  [1, 2, 3, 4, 5];
const arr15= arr14.slice(1,4);
console.log(arr15);

// 11.
let arr16 =  [1, 2, 3, 4, 5];
arr16.splice(3,0, 'a', 'b', 'c' );
console.log(arr16);

// 12.
let arr17 =  [1, 2, 3, 4, 5];
arr17.splice(5, 0, 'e');
arr17.splice(4, 0, 'c');
arr17.splice(1,0, 'a', 'b' );
console.log(arr17);

// 13.
let arr18 = [3, 4, 1, 2, 7];
arr18.sort();
console.log(arr18);

// 14.
const arr19 = [5, 6, 7, 8, 9];
const sum = arr19.reduce((sum, current) => sum + current, 0)
console.log(sum);

// 15.
const arr20 = [5, 6, 7, 8, 9];
const squares = arr20.map(function (item){
    return item ** 2;
});
console.log(squares);

// 16.
const arr21 =  [1,-3, 5, 6,-7, 8, 9,-11];
const filtered1 = arr21.filter(item=> item < 0);
console.log(filtered1);

// 17.
const arr22 = [1,-3, 5, 6,-7, 8, 9,-11];
const evenNumbers = arr22.filter(item=> item % 2 === 0);
console.log(evenNumbers);

// 18.
const arr23 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filtered2 = arr23.filter(item=> item.length > 5);
console.log(filtered2);

// 19.
const arr24 = [1, 2, [3, 4], 5, [6, 7]];
const filtered3 = arr24.filter(item=> Array.isArray(item));
console.log(filtered3);

// 20.
const arr25 = [5,-3, 6,-5, 0,-7, 8, 9];
const filtered4 = arr25.reduce((cnt, current) => current < 0 ? cnt + 1 : cnt, 0);
console.log(filtered4);

