// Write a function to find the maximum of three numbers.

function getMaximum(x, y, z) {

    if (x > y && x > z) {
        console.log(`${x} is the maximum number`);
    } else if (y > z & y > x) {
        console.log(`${y} is the maximum number`);
    } else {
        console.log(`${z} is the maximum number`);
    }
}

let n1 = 438;
let n2 = 378;
let n3 = 989;

getMaximum(n1, n2, n3);