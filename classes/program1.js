// Create a class Person with properties name and age. Create an object using the class.

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

let p1 = new Person("Muskan Mujavar", 23);
p1.display();