nums = [3,2,2,3], val = 3
//Output: nums = [2,2,_,_]

// nums = [0,1,2,2,3,0,4,2], val = 2
// //Output: 5, nums = [0,1,4,0,3,_,_,_]

let removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            console.log(nums)
            i--;
        }
    }
    k = nums.length
    return k;
}

const result = removeElement(nums, val);

console.log(result); // Output: 5

