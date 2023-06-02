const nums = [1,1,1,1]
// Output: 4

// const numIdenticalPairs = function(nums) {
//     goodPair = 0
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] === nums[j]){
//             goodPair++
//         }
//     }
//     }
//     return goodPair
// };

const numIdenticalPairs = function(nums) {
    let map = {};
    let counter = 0;

    for (let num of nums) {
        !map[num] ? map[num] = 1 : counter+=map[num]++
    }
    return counter
};


console.log(numIdenticalPairs(nums));