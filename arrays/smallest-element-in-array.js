// Write a program to find the smallest number in an array.

function smallestElement(...array) {

    let smallest_element = array[0];

    for (let i = 1; i <= array.length; i++) {

        if (array[i] < smallest_element) {
            smallest_element = array[i]
        }
    }

    return smallest_element;
}

let numbers = [34, 7, 23, 78, 8, 10]
console.log(`The smallest element in Array is ${smallestElement(...numbers)}`);