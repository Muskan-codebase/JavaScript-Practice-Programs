// Given an array of numbers, use reduce() to calculate their sum.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((prev, next) => {

    return prev + next;
})

console.log(sum);