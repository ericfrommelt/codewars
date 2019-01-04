// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

function capMe(names) {
  var namesCapped = [];

  for (var i=0; i<names.length; i++) {
    namesCapped.push(names[i].substring(0,1).toUpperCase() +
    names[i].substring(1,names[i.length]).toLowerCase());
  }

  return namesCapped;
}

console.log(capMe(['jo', 'wallie', 'kevin']));
console.log(capMe(['MARGOT', 'JONATHAN', 'NEIL']));
