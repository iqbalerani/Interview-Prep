arr = [1,4,2,5,3]
// Output: 58

var sumOddLengthSubarrays = function(arr) {
    let sum = 0; // Variable to store the final sum
    
    // Outer loop to iterate over each element of the array
    for (let i = 0; i < arr.length; i++) {
      let subarraySum = 0; // Variable to store the sum of each subarray
      
      // Inner loop to determine the end point of the subarray
      for (let j = i; j < arr.length; j += 2) {
        
        // Inner loop to calculate the sum of the subarray
        for (let k = i; k <= j; k++) {
          subarraySum += arr[k];
        }
      }
      
      // Add the subarray sum to the final sum
      sum += subarraySum;
    }
    
    return sum; // Return the total sum of all odd-length subarrays
};
  

  

console.log(sumOddLengthSubarrays(arr));