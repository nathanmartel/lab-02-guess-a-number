// Import functions
import compareNumbers from './compareNumbers.js';


// Get DOM elements
const submitButton = document.getElementById('submit-button');
const playGame = document.getElementById('play-game');
let guessedNum = document.getElementById('guessed-number');
const triesRemaining = document.getElementById('tries-remaining');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');


// Set state
const correctNumber = Math.round(Math.random()*20);
let totalGuesses = 0;
const maxGuesses = 4;
triesRemaining.textContent = maxGuesses;


// Listen for button click
submitButton.addEventListener('click', () => {

    // Change state and update DOM on click
    totalGuesses++;
    let guessedNumber = Number(guessedNum.value);
    if (totalGuesses >= maxGuesses) {
        winOrLose.textContent = 'Sorry! You\'ve lost!';
        playGame.style.display = 'none';
        return;
    }
    console.log('guess is: ' + guessedNumber);
    console.log('correct is: ' + correctNumber);
    const compareResult = compareNumbers(guessedNumber, correctNumber);
    if (compareResult === 1) {
        highOrLow.textContent = 'Too high!';
    } else if (compareResult === -1) {
        highOrLow.textContent = 'Too low!';
    } else {
        winOrLose.textContent = `Holy smokes, you\'re right! It was ${correctNumber}. You won with ${maxGuesses - totalGuesses} guesses left.`;
        playGame.style.display = 'none';
    }    

    triesRemaining.textContent = maxGuesses - totalGuesses;
});
