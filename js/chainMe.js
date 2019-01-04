// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby). Return the final value after execution is complete.

// function chain(input, fs) {
//   for (var i=0; i<fs.length; i++) {
//     input = fs[i](input);
//   }
//   return input;
// }

function chain(input, fs) {
  return fs.reduce(function(a, b) { return b(a); }, input);
}

function add(input) {
  return input + 10;
}

function mult(input) {
  return input * 30;
}
console.log(chain(2, [add, mult, add]));
