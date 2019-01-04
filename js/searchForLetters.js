// String search
//
// Create a method to accept one arbitrary string as an argument, and return a string of length 26.
//
// The objective is to detect if letters of the alphabet (upper or lower case) are present anywhere in the string, and to set each of the 26 characters corresponding to each letter to either '1' if present, '0' if not.
//
// So if an 'a' or an 'A' appears anywhere in the argument string (any number of times), set the first character of the returned string to '1' otherwise to '0', if 'b' or 'B' the the second to '1', and so on for the rest of the alphabet.
//
// So the returned string consists only of '1's and '0's.
//
// For instance
//
// change('a   **&  bZ') =>  '11000000000000000000000001'

function change(string) {
  var tempHolderA = [];
  var tempHolderB = [];
  var binaryHolder = [];
  var binaryString;
  for (var b=0; b<26; b++) {
    binaryHolder.push(0);
  }

  for (var i=0; i<string.length; i++) {
    var foundCount = 0;
    // Find uppercase letters
    if(string.charCodeAt(i) >=65 && string.charCodeAt(i) <= 90) {
      tempHolderA.push(string.charCodeAt(i));
    }
    // Find lowercase letters
    if(string.charCodeAt(i) >=97 && string.charCodeAt(i) <= 122) {
      tempHolderB.push(string.charCodeAt(i));
    }
  }
  // reduce array elements to zero and switch letters that are present to 1
  // for uppercase letters
  for (var j=0; j<tempHolderA.length; j++) {
    tempHolderA[j] = tempHolderA[j] - 65;
    binaryHolder[tempHolderA[j]] = 1;
  }
  // reduce array elements to zero and switch letters that are present to 1
  // for lowercase letters
  for (var k=0; k<tempHolderB.length; k++) {
    tempHolderB[k] = tempHolderB[k] - 97;
    binaryHolder[tempHolderB[k]] = 1;
  }
  // Convert array to string
  binaryString = binaryHolder.join('');
  //return tempHolderA;
  return binaryString;
}

console.log(change('&hAhNe*jem*z'));
