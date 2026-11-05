// Write a program to count the number of vowels in a string.

function countVowels(text) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let foundVowels = new Set();

    for (let i = 0; i <= text.length - 1; i++) {

        let char = text[i].toLowerCase();

        if (vowels.includes(char)) {
            foundVowels.add(char);
        }
    }

    return foundVowels.size;
}

let name = "queueing";
console.log(`String: ${name}`);
console.log(`The total number of vowels in String are ${countVowels(name)}`);
