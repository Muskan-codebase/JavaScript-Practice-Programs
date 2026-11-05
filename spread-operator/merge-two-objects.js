// Merge two objects using the spread operator.

let person1 = {
    name: "Muskan Mujavar",
    address: "Pune, Maharashtra"
}

let person1Info = {
    hobbies: "Art/drawing skething",
    profession: "Software Engineer",
}

let person = {
    ...person1,
    ...person1Info
}

console.log(person);