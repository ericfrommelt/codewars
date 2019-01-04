
var Ghost = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var randomNum = Math.floor(Math.random() * colors.length);
  this.color = colors[randomNum];
  return this;
};

var ghost = new Ghost();
var ghostColor = ghost.color;
console.log(ghost.color);
