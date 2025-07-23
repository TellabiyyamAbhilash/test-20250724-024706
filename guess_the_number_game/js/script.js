const guessInput = document.getElementById('guessInput');
const submitGuessBtn = document.getElementById('submitGuess');
const messageDisplay = document.getElementById('message');
const resetGameBtn = document.getElementById('resetGame');

let randomNumber;
let attempts = 0;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    messageDisplay.textContent = '';
    messageDisplay.className = '';
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuessBtn.disabled = false;
    resetGameBtn.style.display = 'none';
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 100.';
        messageDisplay.className = 'wrong';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        messageDisplay.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        messageDisplay.className = 'correct';
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;
        resetGameBtn.style.display = 'block';
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try again.';
        messageDisplay.className = 'wrong';
    } else {
        messageDisplay.textContent = 'Too high! Try again.';
        messageDisplay.className = 'wrong';
    }
}

submitGuessBtn.addEventListener('click', checkGuess);
resetGameBtn.addEventListener('click', initializeGame);

// Initialize the game when the page loads
initializeGame();
