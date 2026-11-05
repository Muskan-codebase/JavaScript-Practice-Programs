// Write a function to find the factorial of a number.

function getFactorial(n) {

    let fact = 1;

    for (let i = 1; i <= n; i++) {

        fact *= i;
    }

    return fact;
}

let n = 5;
console.log(`The Factorial of the number ${n} is ${getFactorial(n)}`);