// Create a function expression to check whether a number is positive, negative, or zero.

let isPositive = function (n) {

    if (n > 0) {
        console.log(`${n} is a Positive number`);
    } else if (n < 0) {
        console.log(`${n} is a Negative number`);
    } else {
        console.log(`${n} is Zero`);
    }
}

let n = 0;
isPositive(n);