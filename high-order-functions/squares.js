// Given an array of numbers, use map() to return an array containing the squares of each number.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squares = numbers.map((element) => {

    return element * 2;
})

console.log(...numbers);
console.log(...squares);