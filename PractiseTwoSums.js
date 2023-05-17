let nums = [3,2,4]
let target = 6

let twoSum = function(nums, target) {
    const numMap = new Map();

    for(i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(numMap.has(complement)){
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return []
}

console.log(twoSum(nums, target));