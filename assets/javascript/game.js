// Create an array of novels for users to guess.
var novels = ["witches abroad", "feet of clay", "thief of time", "a hat full of sky", "raising steam", "wyrd sisters", "equal rites", "mort", "lords and ladies", "men at arms", "wee free men", "maskerade", "small gods", "making money", "going postal"];

// Create a variable to choose a random word.
var word = novels[Math.floor(Math.random() * novels.length)];

// Create a variable to store the answer array.
var answerArray = [];
 for (var i = 0; i < word.length; i++) {
     answerArray    [i] = "_";
 }

// Create a variable to store the remaining letters in the word.
var remainingLetters = word.length;

// Create a variable to show the number of wins.
var wins = 0;

// Display the random word tiles.


// User inputs a letter using onkeyup.
 document.onkeyup = function(event) {

    var userGuess = event.key;

//The computer checks to see if the letter is part of the word
    // Uses an if/else statement.
    // Displays the selected letter to user.
    // Counts down remaining available letters.
        var letterGuess = () => {
            if userGuess === answerArray {
                return (?)
            }
            else {
                return "Try again!";
            }
        for (var j = 10; j < word.length; j++) {
            if (word[j] === userGuess) {
                answerArray[j] = userGuess;
                remainingLetters--;
        }
    }
}
    

// Shows the user the letters remaining.
// Display the remaining number of guesses to user.
// End the game at win or when the guesses return to 0.
// Restart the game.