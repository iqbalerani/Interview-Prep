function calculateFinalPrices(prices) {
    const finalPrices = [];
  
    for (let i = 0; i < prices.length; i++) {
      let discount = 0;
  
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] <= prices[i]) {
          discount = prices[j];
          break;
        }
      }
  
      const finalPrice = prices[i] - discount;
      finalPrices.push(finalPrice);
    }
  
    return finalPrices;
  }
  function finalPrices(prices) {
    const n = prices.length;
    const finalPrices = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let discount = 0;
        for (let j = i + 1; j < n; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j];
                break;
            }
        }
        finalPrices[i] = prices[i] - discount;
    }

    return finalPrices;
}
  // Example usage:
  const prices = [8, 4, 6, 2, 3];
  const finalPrices = calculateFinalPrices(prices);
  console.log(finalPrices);