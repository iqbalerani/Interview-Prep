const word1 = ["ab", "c"];
const word2 = ["a", "bc"];


var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
}

console.log(arrayStringsAreEqual(word1, word2))