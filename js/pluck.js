// Implement pluck, which takes an array of objects and a property name, and returns an array containing the named property of each object.
//
// For example:
//
// pluck([{a:1}, {a:2}], 'a') // -> [1,2]
// If an object is missing the property, you should just leave it as undefined in the output array.

function pluck(objs, name) {
  arr = [];
  for (var i=0; i<objs.length; i++) {
    arr.push(objs[i][name]);
  }
  return arr;
}

console.log(pluck( [ {a:1}, {a:2} ], 'a') );
