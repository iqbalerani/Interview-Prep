let s = "Hello World"
// Output: 6

const lengthOfLastWord = function(s) {
    let count = 1
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' '){
            console.log('break');
            break
        } else{
            count++
        }
    }
    return count
};

console.log(lengthOfLastWord(s));