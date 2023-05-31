const nums = [1,3,2,1]
// Output: [1,2,1,1,2,1]

// const getConcatenation = function(nums) {
//     let con = []
//     for(let i = 0; i < nums.length; i++) {
//         con.push(nums[i])
//     }
//     for(let i = 0; i < nums.length; i++) {
//         con.push(nums[i])
//     }
//     return con
// };

// var getConcatenation = function(nums) {
//     nums.push(...nums);
//     return nums;
// };

function getConcatenation(nums) {
    let ans = [];
        ans = ans.concat(nums, nums);
    return ans;
};

console.log(getConcatenation(nums));