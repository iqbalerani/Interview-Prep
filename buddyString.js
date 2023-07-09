const s = "ab"
const goal = "ba"
// Output: true

var buddyStrings = function(s, goal) {
    let bol=[]
    for(let i = 0; i < s.length; i++){
        if(goal.includes(s[i])){
            return true
        } else{return false}
    }
};

console.log(buddyStrings(s, goal))