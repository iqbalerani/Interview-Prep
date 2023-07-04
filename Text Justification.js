const words = ["This", "is", "an", "example", "of", "text", "justification."]
const maxWidth = 16

const fullJustify = function(words, maxWidth) {
    const result = []; // to store the final justified lines
    let currentLine = []; // to hold words for the current line
    let currentWidth = 0; // to keep track of the current line width
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordWidth = word.length;
  
      // Check if adding the current word exceeds the maximum width
      if (currentWidth + currentLine.length + wordWidth > maxWidth) {
        // Justify the current line if it's not the last line
        if (currentLine.length > 1) {
          // Calculate the number of spaces needed for justification
          const totalSpaces = maxWidth - currentWidth;
          const spacesBetweenWords = Math.floor(totalSpaces / (currentLine.length - 1));
          const extraSpaces = totalSpaces % (currentLine.length - 1);
  
          let justifiedLine = '';
          for (let j = 0; j < currentLine.length - 1; j++) {
            justifiedLine += currentLine[j]; // Add the word
  
            // Add spaces between words
            for (let k = 0; k < spacesBetweenWords; k++) {
              justifiedLine += ' ';
            }
  
            // Add extra spaces (if any)
            if (j < extraSpaces) {
              justifiedLine += ' ';
            }
          }
  
          // Add the last word of the line without extra spaces
          justifiedLine += currentLine[currentLine.length - 1];
  
          // Add the justified line to the result
          result.push(justifiedLine);
        }
        // If the current line has only one word, left-justify it
        else {
          result.push(currentLine[0] + ' '.repeat(maxWidth - currentWidth));
        }
  
        // Start a new line with the current word
        currentLine = [word];
        currentWidth = wordWidth;
      }
      // If the current word can fit in the current line, add it
      else {
        currentLine.push(word);
        currentWidth += wordWidth;
      }
    }
  
    // Handle the last line (left-justified)
    result.push(currentLine.join(' ') + ' '.repeat(maxWidth - currentWidth - currentLine.length + 1));
  
    return result;
};
  

console.log(fullJustify(words, maxWidth));
  