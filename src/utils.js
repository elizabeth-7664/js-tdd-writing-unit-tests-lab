// utils.js
export const isPalindrome = (word) => {
    // Check if the word is an empty string
    if (!word) {
      throw new Error("Input cannot be empty");
    }
  
    // Check for non-alphabetic characters (excluding spaces)
    if (/[^a-zA-Z]/.test(word)) {
      throw new Error("Input must only contain alphabetic characters");
    }
  
    // Normalize the word to lower case
    const normalizedWord = word.toLowerCase();
  
    // Check if the word is a palindrome
    const reversedWord = normalizedWord.split("").reverse().join("");
    return normalizedWord === reversedWord;
  };
  