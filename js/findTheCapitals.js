// Write a method that takes an array of hashes with two keys each: country or state, and capital. Keys may be symbols or strings

// The method should return an array of sentences declaring the state or country and its capital.

var state_capitals = [{state: 'Maine', capital: 'Augusta'}, {state: 'Ohio', capital: 'Columbus'}];
var country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}];
var mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}];

function capital(capitals) {
  var sentences = [];
  for (var i=0; i<capitals.length; i++) {
    if (capitals[i].state) {
      sentences.push("The capital of " + capitals[i].state + " is " + capitals[i].capital);
    } else if (capitals[i].country) {
      sentences.push("The capital of " + capitals[i].country + " is " + capitals[i].capital);
    }
  }
  return sentences;
}

//console.log(capital(state_capitals));
//console.log(capital(country_capitals));
console.log(capital(mixed_capitals));
