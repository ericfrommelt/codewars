// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Descending order means that you take the highest digit and place the next highest digit immediately after it.

function descendingOrder(n) {
  var arr = n.toString(.split([,]);
  arr.sort(function(a, b) {
    return b - a;
  });
  return parseInt(arr.join(''));
}

console.log(descendingOrder(5493628165));
