/*
Time Convert                                                                   
Using the JavaScript language, have the function timeConvert(num) take the num 
parameter being passed and return the number of hours and minutes the parameter
converts to (ie. if num = 63 then the output should be 1:3). Separate the number
of hours and minutes with a colon.                               
*/

function timeConvert(num) {
  const hours = Math.floor(num / 60);
  const mins = num % 60;
  return `${hours} : ${mins}`;
}

console.log(timeConvert(63)); // 1:3
console.log(timeConvert(2)); // 0:2
