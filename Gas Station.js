let gas = [1,2,3,4,5]; 
let cost = [3,4,5,1,2];
// Output: 3

const canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let currectGas = 0;

    for(let i; i < gas.length; i++){
        totalGas = cost[i] - gas[i];
        if()
    }
};

console.log(canCompleteCircuit(gas, cost));