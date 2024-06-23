import Student from './Student.js';

const doe = new Student('Alex', 'Doe', 1995);
doe.present();
doe.present();
doe.setGrade(100);
doe.present();
doe.setGrade(80);
doe.absent();
console.log(doe);
console.log(`Student's ${doe.fullName()} age ${doe.ageStudent()}`);
console.log(`Student's ${doe.fullName()} GPA ${doe.avgGrade()}`);
console.log(`Average ${doe.fullName()} attendance ${doe.avgAttendance()}`);
console.log(`${doe.fullName()} ${doe.summary()}`);

const statham = new Student('Jason', 'Statham', 1985);
statham.present();
statham.setGrade(70);
statham.absent();
statham.present();
statham.setGrade(80);
statham.absent();
console.log(statham);
console.log(`Student's ${statham.fullName()} age ${statham.ageStudent()}`);
console.log(`Student's ${statham.fullName()} GPA ${statham.avgGrade()}`);
console.log(
    `Average ${statham.fullName()} attendance ${statham.avgAttendance()}`
);
console.log(`${statham.fullName()} ${statham.summary()}`);
