s = "([)]"

let isValid = function(s) {
    const stack = [];
  
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
      let char = s.charAt(i);
  
      // If the current character is an opening parenthesis, push it onto the stack
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      }
      // If the current character is a closing parenthesis
      else if (char === ')' || char === '}' || char === ']') {
        // If the stack is empty or the top element doesn't match the current character, return false
        if (stack.length === 0 || !isMatchingPair(stack.pop(), char)) {
          return false;
        }
      }
    }
  
    // If there are still unmatched parentheses left in the stack, return false
    return stack.length === 0;
  };
  
  // Function to check if a pair of parentheses match
  let isMatchingPair = function(opening, closing) {
    return (
      (opening === '(' && closing === ')') ||
      (opening === '{' && closing === '}') ||
      (opening === '[' && closing === ']')
    );
};
  

console.log(isValid(s));  // Output: false
  