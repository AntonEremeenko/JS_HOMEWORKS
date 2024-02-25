'use strict';

const  name = prompt('Enter your first name');
const  lastName = prompt('Enter your last name');
const  middleName = prompt('Enter your middle name');
const userFullName = lastName + ' ' + name + ' ' + middleName;
console.log(userFullName);

const number = 12345;
const numberString = number.toString();
const result = `${numberString[0]} ${numberString[1]} ${numberString[2]} ${numberString[3]} ${numberString[4]}`;
console.log(result);
