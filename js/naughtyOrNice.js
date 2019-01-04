// Santa needs you to write two functions, getNiceNames and getNaughtyNames.
// Both of the functions accept an array of objects. getNiceNames returns an array
// containing only the names of the nice people, and getNaughtyNames returns an
// array containing only the names of the naughty people. Return an empty array []
// if the result from either of the functions contains no names.
//
// The objects in the passed in array will represent people. Each object contains
// two properties: name and wasNice.
//
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty

var peeps = [
{name: 'xDranik', wasNice: false},
{name: 'Santa', wasNice: true},
{name: 'Warrior reading this kata', wasNice: true}
];

function getNiceNames(people) {
  var nicePeople = [];
  for (var i=0; i<people.length; i++) {
    if (people[i].wasNice == true) {
      nicePeople.push(people[i].name);
    }
  }
  return nicePeople;
}

function getNaughtyNames(people) {
  var naughtyPeople = [];
  for (var i=0; i<people.length; i++) {
    if (people[i].wasNice == false) {
      naughtyPeople.push(people[i].name);
    }
  }
  return naughtyPeople;
}

console.log(getNiceNames(peeps));
console.log(getNaughtyNames(peeps));
