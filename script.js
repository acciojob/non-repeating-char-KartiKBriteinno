function firstNonRepeatedChar(str) {
  // Create a map to store the count of each character
  const charCount = new Map();

  // Count the occurrences of each character in the string
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount.get(char) === 1) {
      // Return the first non-repeated character
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc')); // Output: null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
