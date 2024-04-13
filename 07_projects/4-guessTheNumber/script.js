// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select DOM elements
const submit = document.querySelector('#subt'); // Selects the submit button element
const userInput = document.querySelector('#guessField'); // Selects the input field for user guesses
const guessSlot = document.querySelector('.guesses'); // Selects the element to display guessed numbers
const remaining = document.querySelector('.lastResult'); // Selects the element to display remaining guesses
const lowOrhigh = document.querySelector('.lowOrHi'); // Selects the element to display if the guess is too high or too low
const starOver = document.querySelector('.resultParas'); // Selects the element to display game result messages

// Create a new paragraph element
const p = document.createElement('p');

// Initialize variables
let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Variable to track the number of guesses
let playgame = true; // Flag to control whether the game is active or not

// Check if the game is still active and attach event listener to the submit button
if (playgame) {
    submit.addEventListener('click', function(e) { // Listens for click events on the submit button
        e.preventDefault(); // Prevents the default form submission behavior
        const guess = parseInt(userInput.value); // Parses the user's guess from the input field
        validateGuess(guess); // Calls a function to validate the user's guess
    });
}

// Validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) { // Checks if the guess is not a number
        alert('Please enter a valid number');
    } else if (guess < 1) { // Checks if the guess is less than 1
        alert('Please enter a number more than 1');
    } else if (guess > 100) { // Checks if the guess is greater than 100
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess); // Adds the guess to the array of previous guesses
        if (numGuess === 11) { // Checks if the maximum number of guesses (10) has been reached
            displayGuess(guess); // Displays the guess
            displayMessage(`Game over. Random number was ${randomNumber}`); // Displays a message indicating game over
            endgame(); // Ends the game
        } else {
            displayGuess(guess); // Displays the guess
            checkGuess(guess); // Checks if the guess is correct
        }
    }
}

// Check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) { // Checks if the guess is equal to the random number
        displayMessage('You guessed it right'); // Displays a message indicating correct guess
        endgame(); // Ends the game
    } else if (guess < randomNumber) { // Checks if the guess is less than the random number
        displayMessage('Number is too low'); // Displays a message indicating the guess is too low
    } else if (guess > randomNumber) { // Checks if the guess is greater than the random number
        displayMessage('Number is too high'); // Displays a message indicating the guess is too high
    }
}

// Display the user's guess
function displayGuess(guess) {
    userInput.value = ''; // Clears the input field
    guessSlot.innerHTML += `${guess},  `; // Appends the guess to the list of guesses displayed to the user
    numGuess++; // Increments the number of guesses
    remaining.innerHTML = `${11 - numGuess}`; // Updates the number of remaining guesses
}

// Display a message to the user
function displayMessage(message) {
    lowOrhigh.innerHTML = `<h2>${message}</h2>`; // Displays the message to the user
}

// End the game
function endgame() {
    userInput.value = ''; // Clears the input field
    userInput.setAttribute('disabled', ''); // Disables the input field
    p.classList.add('button'); // Adds a CSS class to the paragraph element
    p.innerHTML = `<h2 id="newGame">Start a New Game</h2> `; // Sets the HTML content of the paragraph element
    starOver.appendChild(p); // Appends the paragraph element to the DOM
    playgame = false; // Updates the flag to indicate that the game is over
    newGame(); // Starts a new game
}

// Start a new game
function newGame() {
    const newButton = document.querySelector('#newGame'); // Selects the button element for starting a new game
    newButton.addEventListener('click', function(e) { // Listens for click events on the button
        randomNumber = parseInt(Math.random() * 100 + 1); // Generates a new random number
        prevGuess = []; // Clears the array of previous guesses
        numGuess = 1; // Resets the number of guesses
        guessSlot.innerHTML = ''; // Clears the list of guesses displayed to the user
        remaining.innerHTML = `${11 - numGuess}  `; // Resets the number of remaining guesses
        userInput.removeAttribute('disabled'); // Enables the input field
        starOver.removeChild(p); // Removes the paragraph element from the DOM
        playgame = true; // Updates the flag to indicate that a new game has started
    });
}
