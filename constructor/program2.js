// Create a class Student with a method to display student details.

function Student(name, rollNo, ...marks) {

    this.name = name;
    this.rollNo = rollNo;
    this.marks = [...marks]
    this.display = function () {

        let totalMarks = this.marks.reduce((prev, next) => {
            return prev + next;
        });

        let per = totalMarks / this.marks.length;

        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Total Marks: ${totalMarks}`);
        console.log(`Percentage: ${per} %`);
    }
}

const student = new Student("Muskan Mujavar", 8, 65, 75, 82, 85, 90);
const student2 = new Student("Stacy", 12, 72, 75, 80, 85, 94);
student.display();
console.log("------------------------------------");
student2.display();