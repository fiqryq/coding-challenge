/* 
============================================
*/

/* 
Soal 1.
gunakan console.log untuk cetak
hasil penjumlahan dari num1 dan num2 
*/

// cara 1 :
// store input numbers
const num1 = 2;
const num2 = 2;

//add two numbers
const result = num1 + num2;

// display the sum
console.log(result); // Jumlah dari num1 dan num2 adalah 4

// cara 2 :
function addNumber(a, b) {
  return a + b;
}
console.log(addNumber(2, 2));

/* 
============================================
*/

/* 
Soal 2.
Membuat konversi kilometer ke miles
1 Km = 0.621371 Miles

note: gunakan Math.round untuk cetak angka hasil konversi 
miles dengan 2 angka dibelakang koma

7.4564520000000005 => 7.45
*/

// rumus untuk hasil perkiraan, bagi nilai panjang dengan 1.609
const kilometers = 13;
let res = Math.round(kilometers / 1.609);
console.log(`${kilometers} kilometers is equal to ${res} miles.`);

/* 
============================================
*/

/* 
Soal 3.
Buat sebuah fungsi untuk mengecek tempertur air:
Jika suhu air == 100 derajat maka cetak 'Air mendidih'
Jika suhu air antara 25 derajat hingga 27 derajat maka cetak 'Air biasa'
Jika suhu air == 0 derajat maka cetak 'Air membeku'
*/

// buat fungsinya dibawah ini!
function checkTemp(value) {
  if (value == 100) return "Air mendidih";
  else if (value >= 25 && value <= 27) return "Airbiasa";
  else if (value == 0) return "Air membeku";
}

console.log(checkTemp(100)); // Air mendidih
console.log(checkTemp(0)); // Air membeku
console.log(checkTemp(26)); // Air biasa
console.log(checkTemp(25)); // Air biasa

/* 
============================================
*/

/* 
Soal 4.
Fizz Buzz:
Buat fungsi fizzBuzz untuk mencetak angka 1 - 100.
jika bilangan kelipatan 3 cetak "Fizz"
jika bilangan kelipatan 5 cetak "Buzz"
jika bilangan kelipatan 3 dan 5 cetak "FizzBuzz"
Selain itu cetak angka.

Contoh:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
*/

// tulis code kamu disini:
function fizzBuzz(value) {
  for (let i = 1; i < value; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
console.log(fizzBuzz(18));

/* 
============================================
*/

/* 
Soal 5.
Buat sebuah fungsi untuk mengecek angka ganjil atau genap
*/

function oddOrEven(value) {
  return 100 % value == 0 ? "genap" : "ganjil";
}
console.log(oddOrEven(11)); // ganjil
console.log(oddOrEven(2)); // genap
console.log(oddOrEven(29)); // ganjil
console.log(oddOrEven(13)); // ganjil
