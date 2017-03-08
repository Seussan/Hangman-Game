// window.onload = function ()
// {

// VARIABLES
// ==========================================================================

// Load the lowercase alphabet into a string used to verify keystroke is valid.
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";

var guessesLeft = 11;
var wins = 0;

var lettersGuessed = [];
var dashedSolution = [];
var letterGuess = "";

// Get elements
var displayWins = document.getElementById("wins");
var displayGuessesLeft = document.getElementById("guessesLeft");
var displayLettersGuessed = document.getElementById("lettersGuessed");
var displayCategory = document.getElementById("category");
var displayDashedSolution = document.getElementById("dashedSolution");

var wordList = [];

var category = "";

// Randomly chooses a word from the wordList array.
// This is the Hangman word for the player to guess.
var originalWordToGuess = "";
var wordToGuess = "";
// wordToGuess = wordToGuess.toLowerCase();

console.log("Original word to guess: " + originalWordToGuess);
console.log("Word to guess: " + wordToGuess);

// FUNCTIONS
// ==============================================================================

  // Guesses Left
  comments = function () {
    showLives.innerHTML = "You have only " + guessesLeft + " guesses left!";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    };

    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      };
    };
  };

  isAlpha = function(x)
  {
    if (lowerAlpha.includes(x)){
      console.log("isAlpha is true for " + x);
      return(true);
    }
    else {
      console.log("isAlpha is false for " + x);
      return(false);
    }
  };
  
  buildDashedSolution = function()
  {
    // Creates hangman word sames length as generated word.
    // Underlines instead of letters to update as letters match. 

    for (var i=0; i < wordToGuess.length; i++)
    {

      if (lowerAlpha.includes(wordToGuess[i]))
        dashedSolution[i] = '_';
      else if (wordToGuess[i] == " ")
        dashedSolution[i] = "-";
      else 
        dashedSolution[i] = wordToGuess[i];
    };

    console.log("Added Dashes: " + dashedSolution);

    return(dashedSolution);
  }

  updateBoard = function()
  {

    displayWins.innerHTML = "Wins: " + wins;
    displayGuessesLeft.innerHTML = "Number of Guesses Remaining: " + guessesLeft;
    displayLettersGuessed.innerHTML = "Letters Already Guessed: " + lettersGuessed;  
    displayCategory.innerHTML = "Category: Adult Animated Series";  
    displayDashedSolution.innerHTML = "Solve: " + dashedSolution;

  }

  // function updateBoard(dashedSolution) {

  //   var newDiv = document.createElement("h1");
  //   newDiv.innerHTML = dashedSolution[i];
  //   targetDiv.appendChild(newDiv);

  // };

// MAIN PROCESS
// ==============================================================================

// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = function(event) {

  var found = false;

  // Captures the key press, converts it to lowercase, and saves it to a variable.
  letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // If the letter is in the current word to guess, call the following functions/methods.
  console.log("GuessesLeft = " + guessesLeft);
  console.log("Hangman hints: " + dashedSolution.length + " letters long... " + dashedSolution)
  console.log("Word to guess (lowercased): " + wordToGuess);
  console.log("You guessed letter: " + letterGuess);
  console.log("Letters you've guessed: " + lettersGuessed);
  console.log("Solve this: " + dashedSolution);

  // document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
  // var newDiv = $("<div>");
  // newDiv.html(lettersGuessed);
  // // $("#guesses").append(newDiv);

  console.log(dashedSolution);

  if (isAlpha(letterGuess) == true)
  {

    if (lettersGuessed.includes(letterGuess)) {

      console.log("Same lettersGuessed " + lettersGuessed + " = letterGuess " + letterGuess);

    }
    else if (!lettersGuessed.includes(letterGuess)) {

      lettersGuessed.push(letterGuess);

      for(var i=0; i < wordToGuess.length; i++)
      {
        console.log("At position i = " + i + " letter is " + wordToGuess.charAt(i));

        if (letterGuess === wordToGuess.charAt(i)) {

          console.log("Yes! " + letterGuess + " is in the word: " + wordToGuess);

          dashedSolution[i] = letterGuess;
          console.log(dashedSolution);
          updateBoard();

          found = true;

          if (!(dashedSolution.includes("_")) && guessesLeft > 0) {
            console.log("You Win!");
            wins++;
            updateBoard();
            return;
          }
        }
      }

      if (!found) {
        console.log(letterGuess + " Is NOT in the word: " + wordToGuess);
        guessesLeft--;
        if (dashedSolution.includes("_") && guessesLeft <= 0) {
          console.log("Sorry, you lose!");
        }
      }


    }
  };
  
  // console.log("Here's the letters you've guessed: " + lettersGuessed); 

  if (dashedSolution.includes("_") && guessesLeft > 0) {

  };
};

// startPlay
startPlay = function ()
{

  guessesLeft = 11;
  lettersGuessed = [];
  dashedSolution = [];
  letterGuess = "";

  wordList = [ "Aeon Flux", "The Flintstones", "The Jetsons", "The Simpsons", "Beavis and Butt-Head", "Daria", "Family Guy", "King of the Hill", "The Ren & Stimpy Show", "South Park", "Archer", "Robot Chicken", "Bob's Burgers" ];
  category = "Adult Animated Series";

  originalWordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
  wordToGuess = originalWordToGuess.toLowerCase();

  console.log("Original word to guess: " + originalWordToGuess);
  console.log("Word to guess: " + wordToGuess);

  buildDashedSolution();
  updateBoard();

  // chosenCategory = categories[Math.floor(Math.random() * categories.length)];
  // word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
  // word = word.replace(/\s/g, "-");
  // console.log(word);
  // buttons();

  // geusses = [ ];
  // lives = 10;
  // counter = 0;
  // space = 0;
  // result();
  // comments();
  // selectCat();
  // canvas();
};

document.getElementById('restart').onclick = function()
{
  // correct.parentNode.removeChild(correct);
  // letters.parentNode.removeChild(letters);
  // showClue.innerHTML = "";
  // // context.clearRect(0, 0, 400, 400);
  startPlay();
};

startPlay();

// };