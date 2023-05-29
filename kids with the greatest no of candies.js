const candies = [2,3,5,1,3]
const extraCandies = 3
// Output: [true,true,true,false,true]

// var kidsWithCandies = function(candies, extraCandies) {
//     const maxCandy = Math.max(...candies);
//     candyOutput = []
    

//     for(let i = 0; i < candies.length; i++) {
//         if((candies[i] + extraCandies) >= maxCandy) {
//             candyOutput.push(true)
            
//         } else {
//             candyOutput.push(false)
//         }
//     }
//     return candyOutput
// };


var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
};

console.log(kidsWithCandies(candies, extraCandies))