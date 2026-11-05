// Write a function to check whether a number is prime.

function checkPrime(n) {

    if (n <= 1) {
        return false
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

let n = 3;

if (checkPrime(n)) {
    console.log(`The given number ${n} is a Prime Number`);
} else {
    console.log(`The given number ${n} is NOT a Prime Number`);
}