// Write a function timeForMilkAndCookies that accepts a Date object, and returns
// true if it's Christmas Eve (December 24th), false otherwise.

function timeForMilkAndCookies(date) {

  var theMonth = date.getMonth();
  var theDay = date.getDate();

  if (theMonth === 11 && theDay === 24) {
    return true;
  } else {
    return false;
  }
}

console.log(timeForMilkAndCookies(new Date()));
console.log(timeForMilkAndCookies(new Date(2015, 11, 24)));
