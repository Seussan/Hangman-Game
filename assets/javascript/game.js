// VARIABLES
// ==========================================================================

// Load the lowercase alphabet into a string used to verify keystroke is valid.
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";

var guessesLeft = 10;
var wins = 0;

var lettersGuessed = [];
var dashedSolution = [];
var letterGuess = "";
var gameResult = "";

// Get elements
var displayWins = document.getElementById("wins");
var displayGuessesLeft = document.getElementById("guessesLeft");
var displayLettersGuessed = document.getElementById("lettersGuessed");
var displayCategory = document.getElementById("category");
var displayDashedSolution = document.getElementById("dashedSolution");
var displayGameResult = document.getElementById("gameResult");
var displayVidHere = document.getElementById("vidHere");

var wordList = [ "Aeon Flux", "The Flintstones", "The Jetsons", "The Simpsons", "Beavis and Butt-Head", "Daria", "Family Guy", "King of the Hill", "The Ren & Stimpy Show", "South Park", "Archer", "Robot Chicken", "Bob's Burgers" ];
var videoList = [ "EI9NZz33VCk", "IKiZm9RzO24", "tTq6Tofmo7E", "SR8WWFzrZAg", "KPeePg2N6QM", "OghvfLc8paM", "md32O6Zp6ww", "LUZIQufgukA", "R7tNDkEACSY", "S8p22rtNMoM", "WqHOAWChIOY", "QmRA2dhQLmU", "w62pZiv8D0Q" ];

var category = "Adult Animated Series";

// Randomly chooses a word from the wordList array.
// This is the Hangman word for the player to guess.
var randomNumber = 0;
var originalWordToGuess = "";
var wordToGuess = "";

console.log("Original word to guess: " + originalWordToGuess);
console.log("Word to guess: " + wordToGuess);
console.log("gameResult: " + gameResult);

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
    console.log("To String " + dashedSolution.join(' '));
  }

  updateBoard = function(gameResult)
  {

    displayCategory.innerHTML = "Category: Adult Animated Series";  
    displayDashedSolution.innerHTML = dashedSolution.join(' ');

    if (gameResult != null){
      displayGameResult.innerHTML = gameResult;

    }

    displayWins.innerHTML = "Wins: " + wins;
    displayGuessesLeft.innerHTML = "Remaining Guesses: " + guessesLeft;
    displayLettersGuessed.innerHTML = "Letters Guessed: " + lettersGuessed.join(' ');
    
  }

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

  if (isAlpha(letterGuess) == true)
  {

    if (lettersGuessed.includes(letterGuess)) {

      console.log("Same lettersGuessed " + lettersGuessed + " = letterGuess " + letterGuess);

    }
    else if (!lettersGuessed.includes(letterGuess)) {

      lettersGuessed.push(letterGuess);
      updateBoard();

      for(var i=0; i < wordToGuess.length; i++)
      {
        // console.log("At position i = " + i + " letter is " + wordToGuess.charAt(i));

        if (letterGuess === wordToGuess.charAt(i)) {

          console.log("Yes! " + letterGuess + " is in the word: " + wordToGuess);

          dashedSolution[i] = letterGuess;
          console.log(dashedSolution);
          updateBoard();

          found = true;

          if (!(dashedSolution.includes("_")) && guessesLeft > 0) {
            console.log("You Win!");
            wins++;
            updateBoard("You Win!");

            document.getElementById("dashedSolution").style.visibility = "hidden"; 
            document.getElementById("gameResult").style.visibility = "hidden"; 

            document.getElementById("vidHere").style.visibility = "visible"; 
            displayVidHere.innerHTML = "<iframe width=\"640\" height=\"360\" src=\"https:\/\/www.youtube.com\/embed\/" + videoList[randomNumber] + "?rel=0&autoplay=1\"\" frameborder=\"0\" allowfullscreen></iframe>";
          }
        }
      }

      if (!found) {
        console.log(letterGuess + " Is NOT in the word: " + wordToGuess);
        guessesLeft--;
        if (dashedSolution.includes("_") && guessesLeft <= 0) {
          console.log("Sorry, you lose!");
          updateBoard("Sorry, You Lose!");
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
  gameResult = displayGameResult.innerHTML = "";

  randomNumber = Math.floor(Math.random() * wordList.length);
  originalWordToGuess = wordList[randomNumber];
  wordToGuess = originalWordToGuess.toLowerCase();

  console.log("Original word to guess: " + originalWordToGuess);
  console.log("Word to guess: " + wordToGuess);

  buildDashedSolution();
  updateBoard();

};

document.getElementById('playAgain').onclick = function()
{
  document.getElementById("vidHere").style.visibility = "hidden"; 
  document.getElementById("dashedSolution").style.visibility = "visible";
  document.getElementById("gameResult").style.visibility = "visible";

  var displayDashedSolution = document.getElementById("dashedSolution");
  document.getElementById("dashedSolution").style.textAlign = "center";

  startPlay();
};

startPlay();