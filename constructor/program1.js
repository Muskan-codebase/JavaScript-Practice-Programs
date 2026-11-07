// Create a constructor function Person that accepts name and age and creates person objects.

function Person(name, age) {

    this.name = name;
    this.age = age;
    this.display = function () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

const p1 = new Person("Muskan Mujavar", 22);
p1.display();