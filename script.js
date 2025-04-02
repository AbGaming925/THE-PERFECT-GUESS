let computer = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    if (userGuess < 1 || userGuess > 50) {
        messageElement.textContent = 'Please guess a number between 1 and 50.';
        return;
    }

    if (userGuess < computer) {
        messageElement.textContent = 'Higher Number Please!';
    } else if (userGuess > computer) {
        messageElement.textContent = 'Lower Number Please!';
    } else if (userGuess != computer) {
        attempts = 0
        messageElement.textContent = 'Please Enter the Guess!';
    } else {
        messageElement.textContent = `Congratulations! You guessed the number ${computer} in ${attempts} attempts!`;
        attemptsElement.textContent = ''
        attempts = 0;
    }

    attemptsElement.textContent = `Attempts: ${attempts}`;
}

// Add an event listener for the "Enter" key
document.getElementById('userGuess').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
