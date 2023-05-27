let accounts = [[2,8,7],[7,1,3],[1,9,5]]
/* Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, 
so return 6. */

let maximumWealth = function(accounts) {
    let wealthmax = 0;
  
    for (let i = 0; i < accounts.length; i++) {
      let customer = accounts[i];
      let wealth = 0;
  
      for (let j = 0; j < customer.length; j++) {
        wealth += customer[j];
      }
  
      if (wealth > wealthmax) {
        wealthmax = wealth;
      }
    }
  
    return wealthmax;
  };
  
  console.log(maximumWealth(accounts));