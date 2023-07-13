gain = [-4,-3,-2,-1,4,3,2]
// Output: 0

const largestAltitude = function(gain) {
    let start = 0;
    check = []
    for(let i = 0; i < gain.length; i++){
        start = start + gain[i]
        // console.log(start);
        check.push(start)
        // console.log(check)
    }
    let heighest = Math.max(...check)
    if(heighest <= 0){
        return 0
    } else {
        return heighest
    }
    
};

console.log(largestAltitude(gain));