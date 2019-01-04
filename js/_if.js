// Make a function called _if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.

function _if(bool, func1, func2) {
  if(bool) {
    func1();
  } else {
    func2();
  }
}

console.log(_if(true, function(){console.log("True")}, function(){console.log("false")}));
