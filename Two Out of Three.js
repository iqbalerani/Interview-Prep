// let nums1 = [1,1,3,2]
// let nums2 = [2,3]
// let nums3 = [3]
// // Output: [3,2]


let nums1 = [3,1]
let nums2 = [2,3]
let nums3 = [1,2]
// Output: [2,3,1]



// let twoOutOfThree = function(nums1, nums2, nums3) {
//     let combinedSet = new Set([...nums1, ...nums2, ...nums3]);
//     console.log(combinedSet)
//     let result = [];
  
//     for (let num of combinedSet) {
//       let count = 0;
//       if (nums1.includes(num)) count++;
//       if (nums2.includes(num)) count++;
//       if (nums3.includes(num)) count++;
  
//       if (count >= 2) {
//         result.push(num);
//       }
//     }
  
//     return result;
// };


var twoOutOfThree = function(nums1, nums2, nums3) {
    // console.log(...new Set([...nums1.filter(el => nums2.includes(el))])); // 3
    // console.log(...nums1.filter(el => nums3.includes(el))); // 1
    // console.log(...nums2.filter(el => nums3.includes(el))); // 2

    return [...new Set([...nums1.filter(el => nums2.includes(el)), 
        ...nums1.filter(el => nums3.includes(el)), 
        ...nums2.filter(el => nums3.includes(el))])];
};

console.log(twoOutOfThree(nums1, nums2, nums3));