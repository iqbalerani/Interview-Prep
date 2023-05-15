nums = [];

// output = 3

// function lastElement() {
//   if (this.length <= 0) return -1;
//   return this.at(-1);
// }

Array.prototype.last = function () {
  return this.length ? this.at(-1) : -1;
};

console.log(nums.last());

// Array.prototype.lastElement = lastElement;
// console.log(nums.lastElement());
