const flowerbed = [0,0,1,0,1]
const n = 1
// Output: true

// let canPlaceFlowers = function(flowerbed, n) {
//     let count = 0

//     for(let i = 0; i < flowerbed.length; i++) {
//         x = 0
//         if(x = 0){
//             if(flowerbed[i] === flowerbed[i+1]){
//                 count++;
//                 x++
//             }
//             else if (pointer === flowerbed[i+1] && pointer === flowerbed[i-1]) {
//                 count++;
//             }
//         }
//     }
//     console.log(count);
//     return false
// };


let canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // Check if the current position and its adjacent positions are empty (0)
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1; // Place a flower at the current position
        count++; // Increment the count of placed flowers
      }
    }
  }

  return count >= n; // Check if enough flowers are placed
};

console.log(canPlaceFlowers(flowerbed, n));
