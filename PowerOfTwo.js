Input: n = 8
// Output: true

// let isPowerOfTwo = function(n) {
//   // Special case for n = 0
//   if (n === 0) {
//     return false;
//   }

//   // Keep dividing n by 2 until it becomes 1
//   while (n !== 1) {
//     // If n is not divisible by 2, it's not a power of 2
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }

//   // If n becomes 1, it's a power of 2
//   return true;
// }


// function isPowerOfTwo(n) {
//     // Check if n is positive and has only one bit set
//     return n > 0 && (n & (n - 1)) === 0;
// }

function isPowerOfTwo(n) {
    // Check if n is positive and has only one bit set
    return Math.log2(n) % 1 === 0 ? true : false
}
console.log(isPowerOfTwo(n));