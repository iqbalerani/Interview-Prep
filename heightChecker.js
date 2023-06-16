// let heights = [1, 1, 4, 2, 1, 3];
// let heights = [5,1,2,3,4]
let heights = [1,2,3,4,5]

let heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b); // Create a sorted copy of the heights array
    let counter = 0;
  
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== expected[i]) {
        counter++;
      }
    }
  
    return counter;
}
  


console.log(heightChecker(heights));
