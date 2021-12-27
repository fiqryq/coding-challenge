/*
Sum of natural numbers
input: 100

ouput: 5050

1+2+3+4+5...+99+100 =  5050
*/

function sumOfNaturalsNum(n) {
  const number = Array.from(Array(n)).map((e, i) => i);
  const count = number.reduce((prev, curr) => {
    return prev + curr;
  });
  return count;
}

console.log(sumOfNaturalsNum(100)); // 4950
console.log(sumOfNaturalsNum(400)); // 79800
console.log(sumOfNaturalsNum(22500)); // 79800
