let nums = [0, 1, 0, 3, 12]
// Output: [1,3,12,0,0]

// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//         }
//     }
//     return nums;
// };

var moveZeroes = function(nums) {
    let left = 0; // Pointer to track the last non-zero element
    let right = 0; // Pointer to iterate through the array

    while (right < nums.length) {
        if (nums[right] !== 0) {
            // If the current element is non-zero, swap it with the last non-zero element
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }

    return nums;
};

console.log(moveZeroes(nums));
