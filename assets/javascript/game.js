window.onload = function(){
    // your page initialization code here
    // the DOM will be available here
 
// Create an array of novels for users to guess.
var novels = ["witches abroad", "feet of clay", "thief of time", "a hat full of sky", "raising steam", "wyrd sisters", "equal rites", "mort", "lords and ladies", "men at arms", "wee free men", "maskerade", "small gods", "making money", "going postal"];
console.log(novels)

// Create a variable to hold the word currently being guessed.
var beingGuessed = [];

// Create a variable to hold the number of tries that a player has left.
var totalGuesses = 10;

// Create a variable to indicate that the game has started.
var gameBegun = false;

// Create a variable to indicate that the game has finished.
var gameEnd = false;

// Create a variable to show the number of wins.
var wins = 0;
console.log(wins);

// Create a variable to choose a random word.
var word = novels[Math.floor(Math.random() * novels.length)];
console.log(word);

// Create a variable to store the remaining letters in the word.
var remainingLetters = word.length;

// Creates a function to update the display on the HTML page.

    var wordText = document.getElementById("currentWord");
    var guessesText = document.getElementById("guessesRemaining-text");
    var winstext = document.getElementById("wins-text");
    var guessesLeft = document.getElementById("lettersGuessed");

    for (var i = 0; i < beingGuessed.length; i++) {
        wordText.innerHtml += beingGuessed[i];
    }

// Create a variable to store the answer array.
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray [i] = "_";
        wordText.textContent += answerArray[i];
    }
    
// Take the input from the user and match it to the selected word.
    document.onkeyup = function(event){
        currentWord.innerHTML = "";
        userGuess = event.key;
        for (var i = 0; i < word.length; i++) {
            if (word[i] == event.key) {
                answerArray[i] = event.key;
            }
            currentWord.innerHTML += answerArray[i]; //Display the selected word in the HTML.
        }
        // Indicate whether the player wins.
        if (currentWord.innerHTML === word) {
            wins++;
        }
        else {
            guessesLeft.innerHTML += event.key;
            guessesText.innerHTML = "Guesses Remaining: " + totalGuesses--;
        }
        console.log(wins)
        // Push the "wins" to the HTML.
        winstext.innerHTML = "Wins: " + wins;
    }

//End the game when the player has used available guesses.
    if (guessesLeft.innerHTML === 0) {
        
    }
   
//Indicate that the game is over and reset the game.

    
};