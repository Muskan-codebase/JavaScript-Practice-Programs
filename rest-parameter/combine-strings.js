// Write a function that accepts multiple strings and combines them into one string.

function combineString(...text) {

    return text.join(" ");
}

console.log(combineString("I", "Love", "Java"));