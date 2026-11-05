// Write a function that accepts multiple numbers and returns the largest number.

function findLargestNumber(...n) {

    let largestNumber = 0;

    for (let i = 0; i <= n.length - 1; i++) {

        if (n[i] > largestNumber) {
            largestNumber = n[i];
        }
    }

    return largestNumber;
}

let numbers = [2, 4, 10, 14, 50, 100, 99, 35, 200, 583];
console.log(`Array of Numbers: ${numbers}`);
console.log(`The largest number in array is ${findLargestNumber(...numbers)}`);