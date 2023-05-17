let x = -123;

let reverse = function(x) {
    let isNegative = x < 0;
    let absValue = Math.abs(x);
    let result = String(absValue).split('').reverse().join('');
    let reversedNumber = parseInt(result);
    
    if (reversedNumber > 2 ** 31 - 1) {
        return 0;
    }

    if (isNegative) {
        reversedNumber *= -1; // Apply the negative sign if necessary
    }
    
    return reversedNumber;
}

console.log(reverse);
