let nums = [3,2,4]
let target = 6

// Define a function that takes in the array 'nums' and the target value 'target'
let twoSum = function(nums, target) {

  // Create an empty Map to store numbers and their indices
  const numMap = new Map();

  // Iterate through each element in the 'nums' array
  for (let i = 0; i < nums.length; i++) {

    // Calculate the complement of the current number
    const complement = target - nums[i];

    // Check if the complement exists in the Map
    if (numMap.has(complement)) {

      // If found, return the indices of the complement and the current number
      return [numMap.get(complement), i];
    }

    // Store the current number and its index in the Map
    numMap.set(nums[i], i);
  }

  // No solution found, return an empty array
  return [];
};

// Call the 'twoSum' function with the 'nums' array and 'target' value, and log the result
console.log(twoSum(nums, target));

  
