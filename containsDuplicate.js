nums = [1,2,3,4]
// Output: true


const containsDuplicate = function(nums) {
    // Create an empty object to keep track of numbers we have seen
    const seen = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
  
      // Check if the number is already in the 'seen' object
      if (seen[num]) {
        // If it is, then we have found a duplicate, so return true
        return true;
      }
  
      // Mark the number as seen by setting its value in the 'seen' object to true
      seen[num] = true;
    }
  
    // If we reach this point, it means no duplicates were found, so return false
    return false;
};
  

console.log(containsDuplicate(nums));
  