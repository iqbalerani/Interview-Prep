let s = "  Hello World  "
// Output: 5

// const lengthOfLastWord = function(s) {
//     let count = 0; // Variable to store the count of characters in the last word
//     let i = s.length - 1; // Start from the end of the string

//     // Count the characters of the last word by moving the index towards the start
//     while (i >= 0) {
//         if (s[i] !== ' ') {
//             count++; // Increment the count for each non-space character
//         } else if (count > 0) {
//             break; // Break the loop if a word has been counted and a space is encountered
//         }
//         i--; // Move the index towards the start
//     }

//     return count; // Return the count of the last word
// };

// const lengthOfLastWord = (s) => {
//     let str = s.trim();
//     return str.length - str.lastIndexOf(' ') - 1;
// };

const str = s.trim();
console.log(str.lastIndexOf(' '));
console.log(str.length - str.lastIndexOf(' ') - 1);

// console.log(lengthOfLastWord(s));