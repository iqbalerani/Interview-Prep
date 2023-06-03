const list1 = [1,2,4]
const list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

let mergeTwoLists = function(list1, list2) {
    merge_list = []
    twolistlength = list1.length + list2.length
    console.log(twolistlength);
    for(let i = 0; i < list1.length; i++) {
        merge_list.push(list1[i]);
        for(let j = 2; j < list1.length; j++) {
            merge_list.push(list2[i]);  
        }
    }
    return merge_list
};

console.log(mergeTwoLists(list1,list2));