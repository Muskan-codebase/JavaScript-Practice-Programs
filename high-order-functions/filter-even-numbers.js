// Given an array of numbers, use filter() to return only even numbers.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = numbers.filter((element) => {

    if (element % 2 === 0) {
        return element
    }
})

console.log(...even);