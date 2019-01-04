// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
//
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
//
// Example:
//
// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

// function solution(pairs) {
//   var str = '', i = 0;
//   var objLength = Object.keys(pairs).length;
//   for (var prop in pairs) {
//     if (i < objLength - 1) {
//       str += prop + ' = ' + pairs[prop] + ',';
//     } else {
//       str += prop + ' = ' + pairs[prop];
//     }
//     i++;
//   }
//   return str;
// }

// A better solution...
function solution(pairs) {
  return Object.keys(pairs).map(function(k) { return k + ' = ' + pairs[k] }).join(',');
}

console.log(solution({a:1, b:'2', c:3}));
