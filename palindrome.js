/***************************************************************************************
 *                                                                                      *
 *                                                                                      *
 *  Palindrome                                                                          *
 *  Using the JavaScript language, have the function Palindrome(str) take the str       *
 *  parameter being passed and return the string true if the parameter is a palindrome, *
 *  (the string is the same forward as it is backward) otherwise return the string      *
 *  false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers  *
 *  will not be part of the string.                                                     *
 ***************************************************************************************/

function palindrome(str) {
  // expecto patronum
  const reverseWord = str.split("").reverse().join("");
  return reverseWord.toLowerCase() === str.toLowerCase();
}

console.log(palindrome("eye")); // true
console.log(palindrome("wave")); // false
console.log(palindrome("Kakak")); // true

module.exports = {
  palindrome,
};
