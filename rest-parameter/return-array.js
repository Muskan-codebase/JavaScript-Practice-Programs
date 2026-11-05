// Write a function that accepts multiple arguments and returns them as an array.

function getArray(...elements) {

    return elements;
}

let fruits = getArray("Apple", "Mango", "Orange", "Banana", "Strawberry");
console.log(fruits);
