items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
],
  (ruleKey = "color"),
  (ruleValue = "silver");
// Output: 1
// Explanation: There is only one item matching the given rule,
// which is ["computer","silver","lenovo"].

// const countMatches = function(items, ruleKey, ruleValue) {
//   let count = 0;

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];

//     if ((ruleKey === "type" && item[0] === ruleValue) || 
//       (ruleKey === "color" && item[1] === ruleValue) ||
//       (ruleKey === "name" && item[2] === ruleValue) 
//     ) {
//     count++;
//     }
//   }
//   return count;
// };

var countMatches = function(items, ruleKey, ruleValue) {
  let count=0;
  let ruleKeys=["type", "color","name"];
  let keyIndex= ruleKeys.indexOf(ruleKey); 
  for(let i=0;i<items.length;i++){
      if (items[i][keyIndex]===ruleValue)  count++;

  }
  return count
};

console.log(countMatches(items, ruleKey, ruleValue));
