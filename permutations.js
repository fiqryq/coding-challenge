var bitmask;
var characters;
var running;
function permutations() {
  var i;
  if (running.length == characters.length) {
    console.log(running.join(""));
  } else {
    for (i = 0; i < characters.length; i++) {
      if (((bitmask >> i) & 1) == 0) {
        running.push(characters[i]);
        bitmask |= 1 << i;
        permutations();
        running.pop();
      }
    }
  }
}

var input = document.getElementById("stdin").value;
characters = input.split("");
running = [];
bitmask = 0;
permutations();
