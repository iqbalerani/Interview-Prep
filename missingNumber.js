// let nums = [3,0,1]
// let nums = [0,1]
let nums = [9,6,4,2,3,5,7,0,1]
// Output: 2

let missingNumber = function(nums) {
    let x = nums.length
    let consecutiveInt = (x*(x+1))/2
    // console.log(consecutiveInt);

    let sumElements = nums.reduce((sum, num) => sum + num, 0);
    // console.log(sumElements);

    missing = consecutiveInt - sumElements

    return missing
};

console.log(missingNumber(nums));