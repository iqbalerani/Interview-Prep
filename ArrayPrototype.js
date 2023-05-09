nums = [1, 2, 3];

// output = 3

function lastElement() {
  if (this.length <= 0) return -1;
  return this.at(-1);
}

// Array.prototype.last = function() {
//     return this.length ? this.slice(-1)[0] : -1;
// };

Array.prototype.lastElement = lastElement;
console.log(nums.lastElement());
