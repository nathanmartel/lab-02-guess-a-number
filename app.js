// Get DOM elements
const submitButton = document.getElementById('submit-button');
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

// Listen for button click, change state, and update DOM
submitButton.addEventListener('click', () => {
    totalGuesses++;
    if (totalGuesses >= maxGuesses) {
        winOrLose.textContent = 'Sorry! You\'ve lost!';
        triesRemaining.style.display = 'none';
        highOrLow.style.display = 'none';
        return;
    }
    let guessedNumber = Number(guessedNum.value);
    console.log('guessedNumber is: ' + guessedNumber);
    console.log('correctNumber is: ' + correctNumber);
    if (guessedNumber === correctNumber) {
        winOrLose.textContent = `Holy smokes! You\'ve won with ${maxGuesses - totalGuesses} guesses left!`;
        triesRemaining.style.display = 'none';
        highOrLow.style.display = 'none';
        return;
    } else if (guessedNumber < correctNumber) {
        highOrLow.textContent = 'Too low!';
    } else {
        highOrLow.textContent = 'Too high!';
    }    

    triesRemainingNumber.textContent = maxGuesses - totalGuesses;
});