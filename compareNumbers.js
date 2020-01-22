export default function compareNumbers(guess, correctNumber) {
    // console.log('guess is: ' + guess);
    // console.log('correct is: ' + correctNumber);
    if (guess < correctNumber) {
        return -1;
    } else if (guess > correctNumber) {
        return 1;
    } else return 0;
}

function compareNumbersOld() {
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