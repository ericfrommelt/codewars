// Monotonic sequence
// Check whether for any number X all successors are greater than or equal to X
// 1,2,3,4,5 true
// 7,6,5,4,3 false

var isMonotone = function(arr) {
  var holder = []; // Holder array

  // If the array contains 0 or 1 items return true
  if (arr.length <= 1) {
    return true;
  } else {
  // else iterate over the array
    for (var i=0; i<arr.length; i++) {
      // Set j = i + 1
      var j = i + 1;
      // If j is greater than or equal to i, push arr[i] to the holder array
      if (arr[j] >= arr[i]) {
        holder.push(arr[i]);
        // Now, if the length of the holder array is equal to the length of the
        // array - 1, push the last element to the array to the holder array
        if (holder.length == arr.length - 1) {
          holder.push(arr[arr.length-1]);
        }
      }
    }
    // Finally, if the length of the holder array is equal to the length of the
    // array return true, else return false
    if (arr.length == holder.length) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isMonotone([1,2,3,4,5,3,4,5])); // false
console.log(isMonotone([5,4,3,2,1])); // false
console.log(isMonotone([1,2,3,4,5])); // true
console.log(isMonotone([1])); // true
console.log(isMonotone([])); // true
console.log(isMonotone([1,2,3,4,5,6,1])); // false
