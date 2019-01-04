// Create a function add(n) which returns a function that always adds n to any number

function add(n) {
  return function(m) {
    return m + n;
  }
}

console.log(add(10)(23));
