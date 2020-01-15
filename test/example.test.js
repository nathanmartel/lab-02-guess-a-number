// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    // Arrange
    // Set up your parameters and expectations

    // compareNumbers(guess, correctNumber) - returns -1 if guess is too low, 1 is guess is too high, 0 if guess is correct
    const correctNumberIs5 = 5;
    let guessedNumber = -2;
    let expectedValue = -1;

    // Act 
    // Call the function you're testing and set the result to a const
    // Why use const here instead of let to reassign value later???
    let actualValue = compareNumbers(guessedNumber, correctNumberIs5);
    
    // Assert
    // Make assertions about what is expected valid result
    assert.equal(actualValue, expectedValue);


    // Rinse, Repeat
    guessedNumber = 5;
    expectedValue = 0;
    actualValue = compareNumbers(guessedNumber, correctNumberIs5);
    assert.equal(actualValue, expectedValue);

    guessedNumber = 15;
    expectedValue = 1;
    actualValue = compareNumbers(guessedNumber, correctNumberIs5);
    assert.equal(actualValue, expectedValue);

    guessedNumber = '5';
    expectedValue = 1;
    actualValue = compareNumbers(guessedNumber, correctNumberIs5);
    assert.equal(actualValue, expectedValue);

});
