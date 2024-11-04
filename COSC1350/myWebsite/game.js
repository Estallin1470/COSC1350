// Generate random number 
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessLeft = 10;
let previousGuess = [];

// Function for player's guess
function makeGuess() {
    let playerGuess = document.getElementById("playerGuess").value;
    let guess = parseInt(playerGuess, 10);

    // Check if input is valid
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("result").textContent = " It's between 1 and 100, try again!";
        return;
    }

    // Add guess to previousGuess
    previousGuess.push(guess);
    guessLeft--;

    // Check if guess is correct
    if (guess === randomNumber) {
        document.getElementById("result").textContent = "Nice, you got it!";
        gameEnd();
    } else if (guessLeft === 0) {
        document.getElementById("result").textContent = "You ran out of guesses!";
        gameEnd();
    } else {
        let hint = guess < randomNumber ? "too low" : "too high";
        document.getElementById("result").textContent = `Nope! Your guess is ${hint}.`;
        document.getElementById("previousGuess").textContent = `Previous guesses: ${previousGuess.join(", ")}`;
    }

    // Reset input field
    document.getElementById("playerGuess").value = "";
}

// End game function
function gameEnd() {
    document.getElementById("playerGuess").disabled = true;
    document.querySelector("button[type='button']").disabled = true;
    document.getElementById("resetButton").style.display = "inline";
}

// Reset game function
function gameReset(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessLeft = 10;
    previousGuess = [];

    document.getElementById("result").textContent = "";
    document.getElementById("previousGuess").textContent = "";
    document.getElementById("playerGuess").disabled = false;
    document.querySelector("button[type='button']").disabled = false;
    document.getElementById("resetButton").style.display = "none";
}