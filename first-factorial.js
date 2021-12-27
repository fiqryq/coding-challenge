/*
 Recursive First Factorial                                                                     
 Using the JavaScript language, have the function RecursiveFirstFactorial(num) take the num   
 parameter being passed and return the factorial of it (ie. if num = 4,              
 return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.          
*/

function recursiveFirstFactorial(num) {
  var tot = 1;
  for (var i = 2; i <= num; i++) {
    tot *= i;
  }
  console.log(tot);
  return tot;
}

recursiveFirstFactorial(3);
