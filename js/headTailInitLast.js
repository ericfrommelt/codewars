function head(array) {
  return array[0];
}

function tail(array) {
  var holder = [];
  for (var i=1; i<array.length; i++) {
    holder.push(array[i]);
  }
  return holder;
}

function init(array) {
  var holder = [];
  for (var i=0; i<array.length-1; i++) {
    holder.push(array[i]);
  }
  return holder;
}

function last(array) {
  return array[array.length-1];
}

console.log(head([5, 1, 8]));
console.log(tail([1, 2, 3, 4, 5, 6]));
console.log(init([1, 2, 3, 4, 5, 6]));
console.log(last([1, 2, 3, 4, 5, 6]));
