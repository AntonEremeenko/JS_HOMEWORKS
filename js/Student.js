function Student(name, lastName, birthYear, lessonsCount = 25) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = [];
    this.currentLessonIndex = 0;

    const currenYear = new Date().getFullYear();

    Student.prototype.checkingName = function () {
        if (this.name.trim().length < 2)
            throw new Error(`Cannot set name ${name}`);
    };

    Student.prototype.checkingLastName = function () {
        if (this.lastName.trim().length < 2) {
            throw new Error(`Cannot set name ${lastName}`);
        }
    };
    Student.prototype.fullName = function () {
        return `${this.name} ${this.lastName}`;
    };

    Student.prototype.checkingBirthOfYear = function () {
        if (
            typeof this.birthYear !== 'number' ||
            this.birthYear.toString().length !== 4 ||
            this.birthYear < 0 ||
            this.birthYear >= currenYear
        )
            throw new Error(`Cannot set year ${birthYear}`);
    };
    Student.prototype.ageStudent = function () {
        return currenYear - this.birthYear;
    };
    Student.prototype.lessons = function () {
        if (typeof lessonsCount !== 'number' || lessonsCount < 1)
            throw new Error('lessonsCount is invalid');
        this.grades = new Array(lessonsCount).fill(null);
        this.attendance = new Array(lessonsCount).fill(null);
    };

    Student.prototype.setAttendance = function (bull) {
        if (typeof bull !== 'boolean')
            throw new Error('bull should be a boolean value');
        this.attendance[this.currentLessonIndex] = bull;
        this.currentLessonIndex += 1;
    };
    Student.prototype.present = function () {
        this.setAttendance(true);
    };
    Student.prototype.absent = function () {
        this.setAttendance(false);
    };
    Student.prototype.setGrade = function (grade) {
        if (typeof grade !== 'number')
            throw new Error(`Grade cannot be ${grade}`);
        if (grade < 0 || grade > 100)
            throw new Error(`Grade cannot be ${grade}`);
        if (!this.attendance[this.currentLessonIndex - 1])
            throw new Error(`Student ${name} is absent`);
        this.grades[this.currentLessonIndex - 1] = grade;
    };

    Student.prototype.avgGrade = function () {
        let sum = 0;
        let lessonsWithGrades = 0;
        for (let i = 0; i < this.currentLessonIndex; i++) {
            if (this.grades[i] !== null) lessonsWithGrades += 1;
            sum += this.grades[i];
        }

        return sum / lessonsWithGrades;
    };
    Student.prototype.avgAttendance = function () {
        let visitedLessons = 0;
        for (let i = 0; i < this.currentLessonIndex; i++) {
            if (!this.attendance[i]) continue;
            visitedLessons += 1;
        }
        return visitedLessons / this.currentLessonIndex;
    };
    Student.prototype.summary = function () {
        if (this.avgGrade() < 90 && this.avgAttendance() < 0.9)
            return 'Редиска';
        if (this.avgGrade() < 90 || this.avgAttendance() < 0.9)
            return 'Добре, але можна краще';
        if (this.avgGrade() >= 90 && this.avgAttendance() >= 0.9)
            return 'Молодець';
    };

    this.checkingName();
    this.checkingLastName();
    this.checkingBirthOfYear();
    this.lessons();
    this.fullName();
}

export default Student;
