let x = -123;

var reverse = function(x) {
    const sign = Math.sign(x); // get the sign of x
    let reversed = 0;
    x = Math.abs(x); // conver to a positive integer

    while (x > 0) {
        // get the last digit of x
        const digit = x % 10;
        // Add the last digit to the flipped integer
        reversed = reversed * 10 + digit;
        // remove the last digit of x
        x = Math.floor(x / 10);
  }

  const result = sign * reversed;
  // Check if the result is out of range
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result;
  }  
};

console.log(reverse);