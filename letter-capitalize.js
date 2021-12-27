/***************************************************************************************
 *                                                                                      *
 *                                                                                      *
 *  Letter Capitalize                                                                   *
 *  Using the JavaScript language, have the function LetterCapitalize(str) take the     *
 *  str parameter being passed and capitalize the first letter of each word. Words      *
 *  will be separated by only one space.                                                *
 ***************************************************************************************/

function letterCapitalize(str) {
  // split str using split will return array and object array can using map
  const word = str
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
  return word;
}

console.log(letterCapitalize("waveast")); // Waveast
console.log(letterCapitalize("nasi padang")); // Nasi Padang
console.log(letterCapitalize("winner Winner Chicken dinner")); // Winner Winner Chicken Dinner

module.exports = {
  letterCapitalize,
};
