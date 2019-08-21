// Create an array of words.

var novel = ["witches abroad", "feet of clay", "thief of time", "a hat full of sky", "raising steam", "wyrd sisters", "equal rites", "mort", "lords and ladies", "men at arms", "wee free men", "maskerade", "small gods", "making money", "going postal"];

var guessNovel = [];
var wins = 0
var losses = 0

// Display the word for the user using getElementID.



// Receive input from user using onkeyup.


// Display user input.

// Validate user input using an if/else statement.

// If valid, display user input via if/else statement.  

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