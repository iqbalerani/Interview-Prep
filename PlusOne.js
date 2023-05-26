digits = [9];
// Output: [1,2,4]

// const plusOne = (digits) => {
//   //YOUR CODE HERE
//   let carry = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i] += carry;
//     if (digits[i] < 10) {
//       carry = 0;
//       break;
//     } else {
//       digits[i] = 0;
//     }
//   }
//   if (carry) {
//     digits.unshift(1);
//   }
//   return digits;
// };

// console.log(plusOne(digits));

var plusOne = function (digits) {
  return `${BigInt(digits.join("")) + 1n}`.split("");
};

console.log(plusOne(digits));
