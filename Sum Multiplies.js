n = 10
// Output: 21


const sumOfMultiples = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}
  

console.log(sumOfMultiples(n)); // Output: 21
