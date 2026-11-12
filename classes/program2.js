// Create a class Student with a method to display student details.

class Student {

    constructor(name, age, rollNo, ...marks) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
        this.marks = [...marks];
    }

    displayDetails() {

        let totalMarks = 0;
        let per;

        totalMarks = this.marks.reduce((prev, next) => prev + next);
        per = totalMarks / this.marks.length

        console.log("-------------------------------------------")
        console.log(`Student Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Total Mark: ${totalMarks}/${this.marks.length}`);
        console.log(`Percentage: ${per}%`)
    }
}

const student1 = new Student("Muskan Mujavar", 22, 8, 75, 69, 80, 85, 89);
const student2 = new Student("Jemima GoldSmith", 23, 8, 89, 85, 75, 75, 90);
student1.displayDetails();
student2.displayDetails();
