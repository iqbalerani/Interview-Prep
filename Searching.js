///indexOf(): The indexOf() method returns the first
//  index at which a given element can be found in an array,
//  or -1 if it is not present.


// const arr = [2, 4, 6, 8, 10];
// console.log(arr.indexOf(6)); // 2
// console.log(arr.indexOf(5)); // -1

/*
find(): The find() method returns the value of the first element 
in the array that satisfies the provided testing function, 
or undefined if no values satisfy the function.
*/

// const arr = [2, 4, 6, 8, 10];
// const result = arr.find((num) => num > 5);
// console.log(result); // 6

/*
filter(): The filter() method creates a new array with all elements that pass
 the test implemented by the provided function.
*/

// const arr = [2, 4, 6, 8, 10];
// const result = arr.filter((num) => num > 5);
// console.log(result); // [6, 8, 10]

/*
includes(): The includes() method determines whether an array includes a 
certain value among its entries, returning true or false as appropriate.
*/

// const arr = [2, 4, 6, 8, 10];
// console.log(arr.includes(6)); // true
// console.log(arr.includes(5)); // false

/*
some(): The some() method tests whether at least one element in the array 
passes the test implemented by the provided function.
*/

// const arr = [2, 4, 6, 8, 10];
// const result = arr.some((num) => num > 5);
// console.log(result); // true

/*
findIndex(): The findIndex() method returns the index of the first element 
in the array that satisfies the provided testing function, or -1 if no element satisfies the function.
*/

// const arr = [2, 4, 6, 8, 10];
// const index = arr.findIndex((num) => num > 5);
// console.log(index); // 2

/*
binarySearch(): Binary search is an efficient searching algorithm for 
sorted arrays. Here's an example implementation of binary search:
*/

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
  
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] < target) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
  
//     return -1;
//   }
  
//   const arr = [2, 4, 6, 8, 10];
//   const index = binarySearch(arr, 8);
//   console.log(index); // 3
  
/*
lastIndexOf(): The lastIndexOf() method returns the last index at which a 
given element can be found in an array, or -1 if it is not present. It searches the array from the end.
*/

// const arr = [2, 4, 6, 8, 10, 6, 8];
// const index = arr.lastIndexOf(6);
// console.log(index); // 5

/*
RegExp with match(): You can also use regular expressions with the match() 
method to search for patterns within strings.
*/

// const str = 'Hello, World!';
// const pattern = /[A-Z]/g;
// const matches = str.match(pattern);
// console.log(matches); // ['H', 'W']
