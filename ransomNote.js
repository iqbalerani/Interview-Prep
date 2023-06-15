ransomNote = "c", magazine = "baa"
// Output: true


// let canConstruct = function(ransomNote, magazine) {
//     let bool = []
//     for(let i = 0; i < ransomNote.length; i++){
//         if(ransomNote[i] === magazine[i]){
//             bool.push(true)
//         }else {
//             bool.push(false)
//         }
//     }
//     return bool.every((value) => value === true)
// };

// let canConstruct = function(ransomNote, magazine) {
//     const charCount = {};
  
//     // Count the frequency of each letter in the magazine
//     for (const char of magazine) {
//         if (charCount[char]) {
//             charCount[char]++;
//           } else {
//             charCount[char] = 1;
//           }
//         console.log(charCount);
//     }
  
//     // Check if you can construct the ransomNote
//     for (const char of ransomNote) {
//         if (charCount[char] && charCount[char] > 0) {
//             charCount[char]--;
//         console.log(charCount[char]);}
//         else {
//             return false
//         }
//     }
  
//     return true; // All required letters are available
// };

const canConstruct = (ransomNote, magazine) => {
    const letterBank = new Map();

    for (let i = 0; i < magazine.length; i++) {
        const character = magazine[i];
        letterBank.set(character, letterBank.has(character) ? letterBank.get(character) + 1 : 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const character = ransomNote[i];
        if (!(letterBank.get(character) > 0)) return false;

        letterBank.set(character, letterBank.get(character) - 1);
    }

    return true;
};


console.log(canConstruct(ransomNote, magazine));
