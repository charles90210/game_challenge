// defines our initial variable with a min value of 1
var min =1;
// defines another variable for the max value of 100
var max =100;
// define a varibale guess1
var guess1;
// define a variable random
var random;
// define a variable count
var count = 1;

var name;
// function declare a variable defined with the user name

function getName(){
  name = prompt("Please enter your name");
}
// calling the function
getName ()

// a function getRandomInclusive that calls a random number between 1 to 100 inclusive.
function getRandomIntInclusive(min, max) {
  random = Math.floor(Math.random()*(max-min + 1)) + min;
}
// calls the function getRandomIntInclusive for the variables min, max
  getRandomIntInclusive(min,max);
  alert(random);

// define a function userGuess that prompts the user to make a guess for integers between 1 to 100 inclusive
function userGuess(){
  guess1 = prompt("Guess a # between 1 and 100. Guess # " + count);

  if (isNaN(guess1)) {
    alert("Please enter numbers only");
  }


  if (guess1 > random) {
    alert("Too high, try again");
  }

  if (guess1 < random) {
    alert("Too low, try again");
  }

if (guess1 == random) {
  alert ("well done " + name);
}
}

while (guess1 != random && count<8) {
  userGuess();
  count = count + 1;
}

if (count === 8){
alert ("SORRY YOU LOSE");
}
