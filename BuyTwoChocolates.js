// let prices = [1,2,2];
let prices = [3,2,3]
let money = 3
// Output: 3

const buyChoco = function(prices, money) {
    // Initialize the minimum sum to a value larger than the maximum possible sum
    let minSum = Infinity;
  
    // Iterate over each chocolate price
    for (let i = 0; i < prices.length; i++) {
      const price1 = prices[i];  // Get the first chocolate price
  
      // Iterate over the remaining chocolate prices, starting from the next index after price1
      for (let j = i + 1; j < prices.length; j++) {
        const price2 = prices[j];  // Get the second chocolate price
        const sum = price1 + price2;  // Calculate the sum of the two prices
  
        // If the sum is less than or equal to money and less than the current minimum sum, update the minimum sum
        if (sum <= money && sum < minSum) {
          minSum = sum;
        }
      }
    }
  
    // If no valid sum was found, return money; otherwise, return the leftover money
    return minSum === Infinity ? money : money - minSum;
};
  

console.log(buyChoco(prices, money));