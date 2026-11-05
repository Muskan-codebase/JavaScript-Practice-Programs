// Create a copy of an object and update one of its properties without modifying the original object.

let person1 = {
    name: "Stacy",
    age: "24",
    address: {
        city: "Pune",
        state: "Maharashtra"
    },
    profession: "Data Analysts",
    skills: ["Python", "R", "Power BI", "SQL", "Microsoft Excel", "Data Visualization"]
}

let person2 = JSON.parse(JSON.stringify(person1));

console.log(person1);
person2.name = "Muskan",
person2.profession = "Software Engineer - Backend Developer",
person2.skills = ["JavaScript", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "REST API"]
console.log(person2);


