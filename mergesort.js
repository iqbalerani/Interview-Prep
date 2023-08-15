a1 = [1, 4, 6, 8, 14, 23]
a2 = [2, 3, 5, 7, 11, 18, 19, 20]
//output = [1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 18, 19, 20, 23]

function mergeSort(a1, a2) {
    let newlist = a1.concat(a2)
    console.log(typeof(newlist));
    console.log(newlist);
    newlist.sort((a,b)=> a-b)
    return newlist
}

console.log(mergeSort(a1,a2));