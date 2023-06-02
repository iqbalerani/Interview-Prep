const names = ["Mary","John","Emma"]
const heights = [180,165,170]
// Output: ["Mary","Emma","John"]

let sortPeople = function(names, heights) {
    let nHeights = heights.map((height, index) => {
        return { name: names[index], height: height}
    })
    
    nHeights.sort((a,b) => {return b.height - a.height})

    let sortedNames = nHeights.map((person) => { return person.name})

    return sortedNames
};

console.log(sortPeople(names, heights))
