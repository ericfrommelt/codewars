function sum(number) {
  var total = 0;
  for (var i=0; i<arguments.length; i++) {
    if (typeof arguments[i] === 'number' &&
       isFinite(arguments[i]) && Math.floor(arguments[i]) === arguments[i]) {
      total += arguments[i];
    }
  }
  return total;
}

console.log(sum(1,2,3));
console.log(sum(1, "2", 3));
