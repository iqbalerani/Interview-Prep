digits = [9];
// Output: [1,2,4]

let plusOne = function (digits) {
  let digitString = digits.join("");
  let addOne = parseInt(digitString) + 1;

  result = addOne.toString().split("");

  output = [];
  result.forEach((num) => {
    output.push(parseInt(num));
  });

  return output;
};

console.log(plusOne(digits));
