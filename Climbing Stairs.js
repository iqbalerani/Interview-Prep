let n = 44
// Output: 3
/*You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top? */
// Contraints: 1 <= n <= 45

// const climbStairs = function(n) {
//     if (n === 0){ return 1 }
//     if (n < 1){ return 0 }

//     const step1 = climbStairs(n - 1);
//     const step2 = climbStairs(n - 2);

//     const total = step1 + step2

//     return total
// };


const climbStairs = function(n, memo = {}) {
    if (n === 0) {
        return 1;
      }
    
      if (n < 0) {
        return 0;
      }
    
      if (memo[n]) {
        return memo[n];
      }
    
      const step1 = climbStairs(n - 1, memo);
      const step2 = climbStairs(n - 2, memo);
    
      memo[n] = step1 + step2;
      return memo[n];
}

console.log(climbStairs(n));
