// Create a function expression to find the factorial of a number.

let findFactorial = function (n) {

    let fact = 1;

    for (i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

console.log(findFactorial(5));
