// In this kata you will create a function that takes a list of non-negative
// integers and strings and returns a new list with the strings filtered out.
//
// Example
//
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// 01 My original solution
// function filter_list(l) {
//   var newlist = [];
//   for (var i=0; i<l.length; i++) {
//     if (typeof(l[i]) === "number") {
//       newlist.push(l[i]);
//     }
//   }
//   return newlist;
// }

// 02 Using Filter
// function filter_list(l) {
//   return l.filter(function(v) {
//     return typeof v == 'number'
//   })
// }

// 03 Using Map
function filter_list(l) {
  var newarray = [];
  l.map(function(list) {
    if(typeof list == 'number') {
      newarray.push(list);
    }
  })
  return newarray;
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0, 15]));
console.log(filter_list([1,2, 'aasf', '1', '123', 123]));
