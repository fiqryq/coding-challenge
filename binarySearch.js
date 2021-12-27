function binarySearch(array, value, low, high) {
  if (high < low) {
    return -1;
  } else {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] > value) {
      return binarySearch(array, value, low, mid);
    } else if (array[mid] < value) {
      return binarySearch(array, value, mid + 1, high);
    } else {
      return mid;
    }
  }
}
var input = document.getElementById("stdin").value.split("\n");
var converted = [];
for (var x in input) {
  converted.push(parseInt(split[x]));
}
converted.reverse();
array = [];
for (var i = 0; i < 10000; i++) {
  array.push(converted.pop());
}
for (var i = 0; i < 10000; i++) {
  var value = converted.pop();
  var answer = binarySearch(array, value, 0, 9999);
  console.log(answer);
}
