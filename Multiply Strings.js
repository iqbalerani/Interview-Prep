let num1 = "123456789";
let num2 = "987654321";
// Output: "121932631112635269"

var multiply = function(num1, num2) {
    return String(BigInt(num1) * BigInt(num2));
};

console.log(multiply(num1, num2));