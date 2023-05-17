
let reverse = function(x) {
    if(x < 0) return reverse *= -1;
    const solution = x.toString().split('').reverse().join('')
    return (solution > 2**32 -1) ? 0 : solution
}
let x = -123
console.log(reverse);