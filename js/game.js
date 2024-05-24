let score = 0;
let timeLeft = 15;
let timerInterval;
let gameStarted = false;
let gameEnded = false;
let isSizeIncreased = false;

const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const resultElement = document.getElementById('result');
const clickImage = document.getElementById('clickButton');
const modal = document.getElementById('resultModal');
const closeModal = document.getElementsByClassName('close')[0];

// Initial image width in em
const originalWidth = 25;
const increasedWidth = originalWidth + 5; // Increase size by 5em

clickImage.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        gameStarted = true;
    }
    if (!gameEnded) {
        score++;
        scoreElement.textContent = `Clicks: ${score}`;
        
        // Toggle image size
        if (isSizeIncreased) {
            clickImage.style.width = `${originalWidth}em`;
        } else {
            clickImage.style.width = `${increasedWidth}em`;
        }
        isSizeIncreased = !isSizeIncreased;
    }
});

function startGame() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Zeit übrig: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameEnded = true;
    clickImage.style.pointerEvents = 'none'; // Disable further clicks

    if (score >= 75) {
        resultElement.textContent = "Congratulations! You win a 30% off gift card!";
    } else if (score >= 50) {
        resultElement.textContent = "Congratulations! You win a 20% off gift card!";
    } else {
        resultElement.textContent = "Sorry, you didn't win a gift card. Try again!";
    }
    modal.style.display = "block"; // Show the modal
}

// Close the modal when the user clicks on <span> (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}
