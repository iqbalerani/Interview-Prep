nums = [2,4,25]
// Output: 2

var findNonMinOrMax = function(nums) {
    if(nums.length <= 2){
        return -1
    }else{
         return nums.sort((a,b)=> a-b).slice(1,2)}
};

console.log(findNonMinOrMax(nums));