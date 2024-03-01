'use strict';

// Задача 1

const user = {
    name: 'John',
    surname: ' Smith'
};
user.name = 'Pete';

delete user.name;


// Задача 2

// Чи можна змінити об'єкт, оголошений за допомогою const?

// const user = {
//     name: 'John'
// };

// // чи буде це працювати і чому ?

// user.name = 'Pete'

// Відповідь
// Ми не можемо змінити user, так як там стоїть const але можемо міняти вміст об’єкта, тому user.name = 'Pete' буде працювати.


// Задача 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
 const sum = salaries.John + salaries.Ann + salaries.Pete;