// Implement a function that successfully adds two numbers together and returns
// their solution in binary. The conversion can be done before, or after the
// addition of the two.
//
// The binary number returned should be a string!

// When used on a number value, toString() accepts a single argument: the radix
// in which to output the number. 
function addBinary(a,b) {
  return (a + b).toString(2);
}

console.log(addBinary(1973,1));
