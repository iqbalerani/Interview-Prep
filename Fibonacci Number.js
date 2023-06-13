n = 5
// Output: 1

const fib = function(n) {
    // Base case: If n is 0 or 1, return n itself
    if (n <= 1) {
        return n;
      } else {
        // Recursive case: Calculate the Fibonacci 
        // number by summing the numbers at positions (n-1) and (n-2)
        return fib(n - 1) + fib(n - 2);
      }
};
    

console.log(fib(n));