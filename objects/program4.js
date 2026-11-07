// Write a program to delete a property from an object.

let person1 = {
    name: "Muskan",
    age: "24 years old",
    dob: "22nd June, 2002",
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    profession: "Software Engineer",
    salary: "2.4 LPA",
    skills: ["JavaScript", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"]
}

console.log("BEFORE DELETION:", person1);

delete person1.age;

console.log("AFTER DELETION:", person1);

