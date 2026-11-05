// Write a function calculate() that accepts two numbers and a callback to perform addition.

function Calculate(x, y, callback) {
    callback(x, y);
}

function Sum(x, y) {

    let z = x + y;
    console.log(`Sum of ${x} & ${y} is ${z}`);
}

let n1 = 58;
let n2 = 26;
Calculate(n1, n2, Sum)
