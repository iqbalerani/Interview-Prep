nums = [1,1,2,2,3]
//Output: 2, nums = [1,2,_]
/* Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// Define the function to remove duplicates from the array
let removeDuplicates = function(nums) {
    // Check if the array is empty
    if (nums.length === 0) {
        // If the array is empty, there are no duplicates, so return 0
        return 0; 
    }
    
    // Initialize pointer i to track the position of the next unique element
    let i = 0; 
    // Iterate through the array starting from the second element
    for (let j = 1; j < nums.length; j++) {
        // Check if the current element is different from the previous unique element
        if (nums[j] !== nums[i]) {
            // Increment i to move to the next position for the next unique element
            i++; 
            // Replace the element at i with the unique element at the current position j
            nums[i] = nums[j]; 
        }
    }
    // Return the length of the modified array, which represents the number of unique elements
    return i + 1; 
};


console.log(removeDuplicates(nums));