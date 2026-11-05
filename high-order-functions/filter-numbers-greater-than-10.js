// Given an array of numbers, use filter() to return numbers greater than 10.

let numbers = [2, 5, 1, 89, 54, 6, 3, 68, 45, 15, 47];

let numGreaterThan10 = numbers.filter((element) => {

    if (element > 10) {
        return element;
    }
})

console.log(`Array of Numbers: ${numbers}`);
console.log(`Numbers greater than 10: ${numGreaterThan10}`);