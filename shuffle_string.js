const s = "codeleet"
const indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"


let restoreString = function(s, indices) {
  // Create an array to store the rearranged characters
  let shuffle = new Array(s.length);
  console.log(shuffle);
  // Iterate over the indices
  for (let i = 0; i < s.length; i++) {
    // Use each index to assign the corresponding character from s to the shuffle array
    shuffle[indices[i]] = s[i];
  }

  // Join the characters in the shuffle array into a single string and return it
  return shuffle.join("");
};

// var restoreString = function(s, indices) {
//     return  indices.map((e, i)=> s[indices.indexOf(i)] ).join("")

// };

console.log(restoreString(s, indices));