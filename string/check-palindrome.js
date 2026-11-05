// Write a program to check whether a string is a palindrome.

function checkPalindrome(text) {

    let reverse_text = "";

    for (let i = text.length - 1; i >= 0; i--) {

        reverse_text += text[i];
    }

    if (reverse_text === text) {
        console.log(`Original String: ${text}`);
        console.log(`Reversed String: ${reverse_text}`);
        console.log(`The given string is a Palindrome`);
    } else {

        console.log(`Original String: ${text}`);
        console.log(`Reversed String: ${reverse_text}`);
        console.log(`The given string is a NOT Palindrome`);

    }
}

let word = "racecar";
checkPalindrome(word);