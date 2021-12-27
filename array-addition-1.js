/*
Array Addition I
Using the JavaScript language, have the function arrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers.
in the array can be added up to equal the largest number in the array, otherwise return the string false. 
For example: if arr contains [4, 6, 23, 10, 1, 3] 
the output should return true because 4 + 6 + 10 + 3 = 23. 
The array will not be empty, will not contain all the same elements, and may contain negative numbers.
*/

function arrayAdditionI(arr) {
  const bignum = arr.sort((a, b) => a - b).pop();
  const addition = arr.reduce((prev, curr) => {
    return prev + curr;
  });
  return addition === bignum;
}

console.log(arrayAdditionI([4, 6, 24, 10, 1, 3])); // 23
