x = "12321"

let isPalindrome = function(x) {
    let bool = {}
    for(let i = 0; i < x.length; i++){
        // console.log(x[x.length - 1 - i], x[i]);
        if(x[i] !== x[x.length - 1 - i]){
            bool = false;
            break;
        }
        bool = true;
    }
    return bool
}

console.log(isPalindrome(x));