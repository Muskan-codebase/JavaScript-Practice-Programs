// Write a function that accepts any number of arguments and returns their sum.

function sum(...n) {

    let total = 0;

    for (let i = 0; i <= n.length - 1; i++) {

        total += n[i];
    }

    return total;
}

let numbers = [32, 46, 7, 2, 69, 4, 3];
console.log(sum(...numbers));