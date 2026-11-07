// Create an arrow function to check whether a number is even.

let checkEven = (x) => x % 2 === 0
let n = 3;
let message = checkEven(n) ? console.log("The given number is even") : console.log("The number is not even");
message;