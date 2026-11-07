// Write a program to update an existing object's property.

let person1 = {
    name: "Muskan",
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    profession: "Software Engineer",
    salary: "2.4 LPA",
    skills: ["JavaScript", "TypeScript", "NodeJS", "ExpressJS", "MongoDB"]
}


person1.name = "Stacy"
person1.profession = "Data Analysts",
    person1.skills = ["Python", "R", "Excel", "SQL", "Power BI", "Data Visualization"]
console.log(person1);