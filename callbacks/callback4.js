// Write a function that uses a callback to check whether a number is even or odd.

function myfunc(number, callback) {
    callback(number);
}

function isEven(number) {

    if (number % 2 === 0) {
        console.log(`${number} is an Even number`);
    } else {
        console.log(`${number} is NOT an Even number`);
    }
}

myfunc(4, isEven);