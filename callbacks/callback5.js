// Write a function that accepts an array and a callback, then executes the callback for every element.

function myfunc(callback, ...elements) {
    callback(...elements);
}

function display(...elements) {
    console.log(elements);
}

myfunc(display, "Apple🍎", "Banana🍌", "Watermelon🍉", "Strawberry🍓");