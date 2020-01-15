// Get DOM elements
const submitButton = document.getElementById('submit-button');
const playGame = document.getElementById('play-game');
let guessedNum = document.getElementById('guessed-number');
const triesRemaining = document.getElementById('tries-remaining');
const triesRemainingNumber = document.getElementById('tries-remaining-number');
const highOrLow = document.getElementById('high-or-low');
const winOrLose = document.getElementById('win-or-lose');

// Set state
const correctNumber = Math.round(Math.random()*20);
let totalGuesses = 0;
const maxGuesses = 4;
triesRemainingNumber.textContent = maxGuesses;

// Change state and update DOM on click
function compareNumbers() {
    totalGuesses++;
    let guessedNumber = Number(guessedNum.value);
    if (totalGuesses >= maxGuesses) {
        winOrLose.textContent = 'Sorry! You\'ve lost!';
        playGame.style.display = 'none';
        return;
    }
    console.log('guess is: ' + guessedNumber);
    console.log('correct is: ' + correctNumber);
    if (guessedNumber === correctNumber) {
        winOrLose.textContent = `Holy smokes, you\'re right! It was ${correctNumber}. You\'ve won with ${maxGuesses - totalGuesses} guesses left.`;
        playGame.style.display = 'none';
        return;
    } else if (guessedNumber < correctNumber) {
        highOrLow.textContent = 'Too low!';
    } else {
        highOrLow.textContent = 'Too high!';
    }    

    triesRemainingNumber.textContent = maxGuesses - totalGuesses;
}

// Listen for button click
submitButton.addEventListener('click', compareNumbers);