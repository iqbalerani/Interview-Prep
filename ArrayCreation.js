// Empty array
let emptyArray = [];

// Array with initial values
let numberArray = [1, 8, 4, 3, 5];
let stringArray = ["apple", "banana", "cherry"];

// Array with mixed data types
let mixedArray = [1, "apple", true, null, undefined];

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}

stringArray[1] = "Kiwi"
console.log(stringArray);

stringArray.push("orange");
console.log(stringArray);

stringArray.pop();
console.log(stringArray);

stringArray.unshift("mango");
console.log(stringArray);

stringArray.shift();
console.log(stringArray);

numberArray.sort();
console.log(numberArray);

numberArray.reverse();
console.log(numberArray);

let joinString = numberArray.join("-");
console.log(joinString);

let joinArray = stringArray.join("/");
console.log(joinArray);

let slicedArray = numberArray.slice(1, 3);
console.log(slicedArray);