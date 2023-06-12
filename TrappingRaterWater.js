const height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// let trap = function(height) {
//     const n = height.length;
//     let leftMaxHeight = new Array(n).fill(0);  // Track the maximum height on the left side
//     let rightMaxHeight = new Array(n).fill(0); // Track the maximum height on the right side

//     // Calculate the maximum height on the left side for each position
//     leftMaxHeight[0] = height[0];
//     for (let i = 1; i < n; i++) {
//         leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i]);
//     }

//     // Calculate the maximum height on the right side for each position
//     rightMaxHeight[n - 1] = height[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i]);
//         console.log(rightMaxHeight);
//     }

//     let trappedWater = 0;

//     // Calculate the trapped water by comparing the heights with the left and right maximum heights
//     for (let i = 0; i < n; i++) {
//         trappedWater += Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i];
//     }

//     return trappedWater;
// };

let trap = function(height) {
    let left = 0; // left pointer
    let right = height.length - 1; // right pointer
    let leftMax = 0; // maximum height on the left
    let rightMax = 0; // maximum height on the right
    let totalWater = 0; // total amount of water trapped
  
    while (left < right) {
      if (height[left] < height[right]) {
        // The height at the left pointer is smaller
  
        // Update the maximum height on the left if necessary
        leftMax = Math.max(leftMax, height[left]);

        // Calculate the amount of water that can be trapped at this position
        totalWater += leftMax - height[left];
  
        // Move the left pointer to the right
        left++;
      } else {
        // The height at the right pointer is smaller
  
        // Update the maximum height on the right if necessary
        rightMax = Math.max(rightMax, height[right]);
  
        // Calculate the amount of water that can be trapped at this position
        totalWater += rightMax - height[right];
  
        // Move the right pointer to the left
        right--;
      }
    }
  
    return totalWater;
}
  

  
console.log(trap(height));