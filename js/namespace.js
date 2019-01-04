// Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

var MyNamespace = {};
MyNamespace.MyClass = function(string) {
  function sayHello() {
    return string;
  }
};

console.log(MyNamespace.MyClass.sayHello("eric"));
