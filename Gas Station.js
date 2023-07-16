let gas = [1,2,3,4,5]; 
let cost = [3,4,5,1,2];
// Output: 3

const canCompleteCircuit = function(gas, cost) {
    const totalStations = gas.length;
    let currentGas = 0;
    let startStation = 0;
    let totalGas = 0;
    let totalCost = 0;
  
    for (let i = 0; i < totalStations; i++) {
      totalGas += gas[i];
      totalCost += cost[i];
      currentGas += gas[i] - cost[i];
  
      if (currentGas < 0) {
        // If current gas is negative, reset the starting station and gas count
        startStation = i + 1;
        currentGas = 0;
      }
    }
  
    if (totalGas < totalCost) {
      // If the total gas is less than the total cost, it's impossible to complete the circuit
      return -1;
    }
  
    return startStation;
};


console.log(canCompleteCircuit(gas, cost));