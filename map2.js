const numbers = [1, 2, 3, 4, 5];

function doubleNumbers(numbers) {
   return numbers.map((number)=> {return number * 2})
}

console.log(doubleNumbers(numbers))