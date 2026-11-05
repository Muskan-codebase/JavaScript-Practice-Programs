// Write a program to reverse an array without using the reverse() method.

function reverseArray(...array) {

    let start = 0;
    let end = array.length - 1;

    while (start < end) {

        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }

    return array;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(...numbers))