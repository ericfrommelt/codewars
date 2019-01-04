// An arithmetic sequence is one in which f(n) = f(n-1) + c, where c is a constant value. Your job is to write a function, nthterm(), that calculates and returns the nth value in an arithmetic sequence when presented with three arguments:
//
// first, the value of f(0)
// n, the index of the desired number in the sequence, and
// c, the constant value referred to in the formula above

function nthTerm(first, n, c) {
  return first + n * c;
}

console.log(nthTerm(1, 2, 3));
console.log(nthTerm(2, 2, 2));
console.log(nthTerm(-50, 10, 20));
