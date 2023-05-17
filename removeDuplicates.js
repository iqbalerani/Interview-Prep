nums = [1,1,2,2,3]

let removeDuplicates = function(nums) {
    const set = new Set()
    // console.log(set)
    nums.forEach(num => set.add(num));
    console.log(set);

    const setIter = set.keys()
    let i = 0
    console.log(setIter);

    for(let value of setIter) {
        nums[i] = value;
        i++;
        // console.log(setIter);
        // console.log(value);
    }
    return set.size
}

console.log(removeDuplicates(nums));