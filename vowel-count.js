/***************************************************************************************
 *                                                                                      *
 *                                                                                      *
 * Diberikan sebuah function untuk menghitung jumlah huruf vocal.                       *
 * Sebagai contoh:                                                                      *
 * Input: makan                                                                         *
 * Output: 2                                                                            *
 *                                                                                      *
 *                                                                                      *
 ***************************************************************************************/

// Cara 1 :
function vowelCount(str) {
  let totalVowel = 0;
  const vocalLetter = ["a", "i", "u", "e", "o"];
  const word = str.split(""); //return array
  const data = word.filter((item) => vocalLetter.includes(item)); // match arrays elements
  return (totalVowel = data.length);
}

console.log(vowelCount("makan")); // 2
console.log(vowelCount("memakan")); // 3

module.exports = {
  vowelCount,
};
