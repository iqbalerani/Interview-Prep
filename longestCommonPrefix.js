strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = function(strs) {
    // Check if the array is empty
    if (strs.length === 0) {
        return "";
    }

    // Initialize the result string
    let result = "";

    // Iterate through the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // Get the character at index i of the first string

        // Compare the character with the corresponding character of each subsequent string
        for (let j = 1; j < strs.length; j++) {

            // Check if we've reached the end of any string or if the character doesn't match
            if (i >= strs[j].length || strs[j][i] !== char) {
                return result; // Return the current result
            }
        }

        // Append the character to the result string
        result += char;
    }

    // Return the final result string
    return result;
};

console.log(longestCommonPrefix(strs));


