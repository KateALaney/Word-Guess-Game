window.onload = function(){
    // your page initialization code here
    // the DOM will be available here
 
// Create an array of novels for users to guess.
var novels = ["witches abroad", "feet of clay", "thief of time", "a hat full of sky", "raising steam", "wyrd sisters", "equal rites", "mort", "lords and ladies", "men at arms", "wee free men", "maskerade", "small gods", "making money", "going postal"];
console.log(novels)

// Create a variable to hold the word currently being guessed.
var beingGuessed = [];

// Create a variable for the maximum number of tries a player has.
const tries = 10;

// Create a variable to hold the letters that have been guessed.
var guessedLetters = [];

// Create a variable to hold the number of tries that a player has left.
var guessesLeft = 0;

// Create a variable to store the letters that have been accurately guessed.
var accurateLetters = []

// Create a variable to indicate that the game has started.
var gameBegun = false;

// Create a variable to indicate that the game has finished.
var gameEnd = false;

// Create a variable to show the number of wins.
var wins = 0;
console.log(wins)

// Create a variable to choose a random word.
var word = novels[Math.floor(Math.random() * novels.length)];
console.log(word)

// Create a variable to store the remaining letters in the word.
var remainingLetters = word.length;

// Creates a function to update the display on the HTML page.
// function updateDisplay() {
    var wordText = document.getElementById("currentWord");
    var guessesText = document.getElementById("guessesRemaining-text");
    var wins = document.getElementById("wins-text");
    var guessed = document.getElementById("lettersGuessed");

    for (var i = 0; i < beingGuessed.length; i++) {
        wordText.innerHtml += beingGuessed[i];
    }

    guessesText.innerHTML = guessesLeft;
    guessed.innerHTML = guessedLetters;

    if(guessesLeft <= 0) {
        gameEnd = true;
    }
// }
    // updateDisplay();

    // Create a variable to store the answer array.
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray [i] = "_";     
        wordText.textContent += answerArray[i];
    }

    console.log(answerArray)
    console.log(word)
    
    // Take the input from the user and matches it to the selected word.
    document.onkeyup = function(event){
        var userGuess = event.key;
        for (var a = 0; a < answerArray.length; i++); {
            if (word [i] == event.key) {
                answerArray [i] = event.key;
            }
        }
    }

    


};