function runGame() {

    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0
 
do {
    guessString = prompt('I am thinking of a number in the range 1 to 100.  \n\n What is the number?')
    guessNumber = +guessString;
    numTries += 1;
    correct = checkGuess(guessNumber, randomNumber);
} while (!correct);

alert('You got it! The number was ' + randomNumber + ' \n\nIt took your ' + numTries + 'tries to guess correctly.');

}

function checkGuess(guessNumber, randomNumber) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert('You have not entered a number. \n\nPlease enter a number in the 1-100 range.');
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert('Please enter an integer in the 1-100 range.');
    } else if (guessNumber > randomNumber) {
        alert('Your number is too large!');
    } else if (guessNumber < randomNumber) {
        alert('Your number is too small!');
    } else {
        correct = true;
    }
    return correct;
}




