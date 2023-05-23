let nums = [2,5,1,3,4,7]
let n = 3
//Output: [2,3,5,4,1,7] 

let shuffle = function(nums, n) {
    let x = [];
    let y = [];
    list_arr = nums / n 

    for(i=0; i<nums.length ; i++) {
        if(i < n){
            x.push(nums[i])
        } else {
            y.push(nums[i])
        }
    }
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(x[i], y[i]);
    }
    return result
};

console.log(shuffle(nums, n));

// let shuffle = function(nums, n) {
//     let arr=[]
//     for(let i=0;i<n;i++){
//         arr.push(nums[i]);
//         arr.push(nums[n+i])
//     }
//     return arr
// };