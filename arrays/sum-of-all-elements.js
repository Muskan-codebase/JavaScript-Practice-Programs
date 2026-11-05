// Write a program to find the sum of all elements in an array.

function getSum(...array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum;
}

let numbers = [3, 4, 1, 6, 8, 12, 14];
console.log(`The sum of all numbers in an Array is ${getSum(...numbers)}`);