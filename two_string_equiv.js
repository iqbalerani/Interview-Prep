const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
// Output: true

// let arrayStringsAreEqual = function (word1, word2) {
//   // Join the elements of word1 into a single string
//   const joinedWord1 = word1.join('');

//   // Join the elements of word2 into a single string
//   const joinedWord2 = word2.join('');

//   // Compare the two strings
//   return joinedWord1 === joinedWord2;
// };

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("")==word2.join("")
};


console.log(arrayStringsAreEqual(word1, word2));

