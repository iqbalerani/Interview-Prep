x = 121

let isPalindrome = function(x) {
    let bool = {};
    const str = x.toString();
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            bool = false;
            break;
        }
        bool = true;
    }
    const result = bool === true;
    return result;
};

console.log(isPalindrome(x));
