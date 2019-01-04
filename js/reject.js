// Impliment the reject function

// function reject(array, iterator) {
//   var holder = [];
//   for (var i=0; i<array.length; i++) {
//     if (iterator(array[i]) === false) {
//       holder.push(array[i]);
//     }
//   }
//   return holder;
// }

// A better solution...
function reject(array, iterator) {
  return array.filter(function(x) { return !iterator(x); });
}

console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
