const array = ['a', 'b', 'c', 'd', 'e'];

// array.splice(2); // Removes all elements from index 2 onwards
// console.log(array); // Output: ['a', 'b']

array.splice(1, 2); // Removes 2 elements starting from index 1
console.log(array); // Output: ['a']

// array.splice(1, 0, 'x', 'y'); // Inserts 'x' and 'y' at index 1
// console.log(array); // Output: ['a', 'x', 'y']

// const removedElements = array.splice(1, 1, 'z'); // Replaces 1 element at index 1 with 'z'
// console.log(array); // Output: ['a', 'z', 'y']
// console.log(removedElements); // Output: ['x'] (array of removed elements)
