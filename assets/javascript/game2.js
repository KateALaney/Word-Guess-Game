// Create an array of words.

var novel = ["witches abroad", "feet of clay", "thief of time", "a hat full of sky", "raising steam", "wyrd sisters", "equal rites", "mort", "lords and ladies", "men at arms", "wee free men", "maskerade", "small gods", "making money", "going postal"];

var guessLetters = [];
var guessNovel = [];
var wins = 0;
var guesses = 10;
var guessedLetters = 0;
var pausegame = false;

// Checks if the letter pressed is valid (A-Z).
isLetter: function (ch) {
  return /^[A-Z]$/i.test(ch);
},

// Check to see if the letter is valid within the word (function).

letterCheck: function (letter) {
  var foundLetter = false
  
  for (var i = 0, j = novel.length; i < j; i++) {
    if (letter === novel[i]) {
        game.guessingWord[i] = letter
        foundLetter = true
        correctSound.play()
        document.getElementById(event.key).style.color = "#222";
        // logic for word guesssed to match wordToMatch
        if (game.guessingWord.join("") === wordToMatch) {
            // Increment # of wins
            game.wins++
            game.pauseGame = true
            game.updateDisplay()
            setTimeout(game.resetGame, 5000)
        }
    }
}

  // Search the word to see if the letter 


// Display the word for the user using getElementbyID.

function randomNovelDisplay() {
  document.getElementById("guessNovel-text").innerHTML = 
}


function myFunction() {
  document.getElementById("guessNovel-text").innerHTML = guessNovel;
}



document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var randomNovel = novel[Math.floor(Math.random() * novel.length)];

// Display user input.

// How do I do this?  This is where I use the connection to the HTML.  So I need a place to display it in the HTML.  That means I have to create a space in the HTML.

// Validate user input using an if/else statement.

    if guessNovel {

    }  

    else {

      getElementID
    }

// If valid, display user input via if/else statement.  

    if userGuess === guessNovel {

    }

    else {
      display
    }

// If invalid, display user input via if/else statement.

// Display remaining guesses to user.

// End the game at win or when guesses return to 0.

// Start the game again.

// Note: Keep users from guessing the same letter twice.

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var randomNovel = novel[Math.floor(Math.random() * novel.length)];

    }
  };