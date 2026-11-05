// Write a program to count the number of words in a string.

function countNumbersInString(text) {

    let count = 0;

    for (let i = 0; i <= text.length - 1; i++) {
        count++
    }

    return count;

}

let name = "Muskan";
console.log(`The number of words in String are ${countNumbersInString(name)}`);