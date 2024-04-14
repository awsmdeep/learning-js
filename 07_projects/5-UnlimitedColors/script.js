// Function to generate a random hexadecimal color
const randomColor = function () {
    let hex = "0123456789ABCDEF"; // Hexadecimal characters
    let color = '#'; // Initialize color with hash symbol for hex code
    // Generate random color code by appending random hex characters
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; // Randomly select hex character
    }
    return color; // Return the random color code
};

let colorEffect; // Variable to store interval ID for background color change

// Function to start changing the background color
const startChangingBg = function () {
    // Check if colorEffect is not already set to prevent multiple intervals
    if (!colorEffect) {
        colorEffect = setInterval(changeBgColor, 1000); // Start interval to change background color every second
    }
};

// Function to stop changing the background color
const stopChangingBg = function () {
    clearInterval(colorEffect); // Clear the interval to stop changing background color
    colorEffect = null; // Reset colorEffect to null
};

// Function to change the background color
const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor(); // Set body background color to a random color
};

// Add event listener to start button to call startChangingBg function on click
document.querySelector('#start').addEventListener('click', startChangingBg);

// Add event listener to stop button to call stopChangingBg function on click
document.querySelector('#stop').addEventListener('click', stopChangingBg);
