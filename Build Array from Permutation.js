// nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
nums = [5,0,1,2,3,4]

let buildArray = function(nums) {
    rearrange = []

    nums.forEach((num) => {
        rearrange.push(nums[num])
    })
    return rearrange
};


console.log(buildArray(nums));