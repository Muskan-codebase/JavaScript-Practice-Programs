// Write a program to count the number of properties in an object.

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

let propertyCount = Object.keys(person1).length;
console.log(`Total properties in object are ${propertyCount}`);