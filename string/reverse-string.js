// Strings
// 1. Write a program to reverse a string.

function reverseString(text) {

    let reverse_string = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverse_string += text[i]
    }

    return reverse_string;
}

let word = "Hello World";
console.log(word);
console.log(reverseString(word));