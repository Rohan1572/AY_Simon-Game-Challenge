var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
}
