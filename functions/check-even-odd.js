// Write a function to check whether a number is even or odd.

function isEven(n) {

    if (n % 2 === 0) {
        console.log(`The given number ${n} is Even`);
    } else {
        console.log(`The given number ${n} is Odd`);
    }
}

let n = 4;
isEven(n);