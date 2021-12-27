/***************************************************************************************
 *                                                                                      *
 *                                                                                      *
 *  Dash Insert                                                                         *
 *  Using the JavaScript language, have the function dashInsert(str) insert dashes      *
 *  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
 *  output should be 4547-9-3. Don't count zero as an odd number.                       *
 *                                                                                      *
 *  Dash Insert                                                                         *
 *  Buat sebuah function yang akan memasukkan dashes ('-') di antara 2 angka            *
 *  ganjil di dalam str. Contoh: jika str adalah 454793 maka yang akan di return adalah *
 *  4547-9-3. Jangan menghitung 0 (nol) sebagai angka ganjil.                           *
 *                                                                                      *
 *                                                                                      *
 ***************************************************************************************/

function dashInsert(str) {
  // write your magic here!
  // convert string to number
  const arr = str.split("").map((item) => Number(item));
  for (let index = 0; index < arr.length; index++) {
    if (arr[index - 1] % 2 == 1 && arr[index] % 2 == 1) {
      // how splice work :
      // splice(start, deleteCount, item1)
      arr.splice(index, 0, "-");
    }
  }
  return arr.join("");
}
console.log(dashInsert("450093"));
// console.log(dashInsert("450093"));
// console.log(dashInsert("554297"));

module.exports = {
  dashInsert,
};
