// Write a program to remove duplicate elements from an array.

function removeDuplicates(...array) {

    let uniqueElements = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicates = false;

        for (let j = 0; j < uniqueElements.length; j++) {
            if (array[i] === uniqueElements[j]) {
                isDuplicates = true;
                break;
            }
        }

        if (!isDuplicates) {

            uniqueElements.push(array[i])
        }
    }

    return uniqueElements;

}

let numbers = [1, 2, 2, 3, 4, 5, 4, 6];
console.log(`The duplicate elements in Array are ${removeDuplicates(...numbers)}`);