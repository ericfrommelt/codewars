// function diagonalSum(matrix){
//   var sum = 0;
//   for (var i=0; i<matrix.length; i++) {
//     for (var j=0; j<matrix[i].length; j++) {
//       //console.log("matrix length: " + matrix.length);
//       //console.log("matrix[i] length: " + matrix[i].length);
//       //console.log("matrix[i][j]: " + matrix[i][j]);
//
//       console.log("num1: " + matrix[i][0]);
//       console.log("num2: " + matrix[i][1]);
//
//       sum += matrix[i][j];
//
//       console.log("sum: " + sum);
//       console.log("j: " + j);
//     }
//   }
//   return sum;
// }

function diagonalSum(matrix) {
  var sum = 0;
  var counter = 0;
  for (var i=0; i<matrix.length; i++) {
    sum += matrix[i][counter];
    counter++;
  }
  return sum;
}


//console.log(diagonalSum([[12]]));
console.log(diagonalSum([[1, 2], [3, 4]]));
console.log(diagonalSum([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]));
