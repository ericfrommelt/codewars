function double(array) {
  var newArray = array.map(function(num) {
    return num * 2;
  });
  return newArray;
}

console.log(double([1, 2, 3, 4, 5, 6]));
