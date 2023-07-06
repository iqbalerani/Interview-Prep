let s = "aa"
let goal = "aa"
// Output: false

// let buddyStrings = function(s, goal) {
//     if (s.length !== goal.length) {
//         return false;
//     }

//     if( s === goal ){

//     }
// };

// let diffIndices = [];
// for(let i = 0; i < s.length; i++){
//     if(s[i] !== goal[i]) {
//         diffIndices.push(i)
//     }
// }

// const [idx1, idx2] = diffIndices;
    
// console.log(s[idx1] === goal[idx2] && s[idx2] === goal[idx1]);
// console.log(diffIndices);

if (s === goal) {
    const charCount = new Map();
    for (let char of s) {
        if (charCount.has(char)) {
            console.log(true);
        }
        charCount.set(char, 1);
    }
} else { console.log(false)}

// console.log(buddyStrings(s, goal));