// Write a program to find the largest number in an array.

function largestElement(...array) {

    let largest_element = 0;

    for (let i = 0; i <= array.length; i++) {

        if (largest_element < array[i]) {
            largest_element = array[i]
        }
    }

    return largest_element;

}

let numbers = [34, 7, 23, 78, 8, 10]
console.log(`The largest element in Array is ${largestElement(...numbers)}`);
