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
const personalCode = document.getElementById("personalCode");
const modal = document.getElementById('resultModal');
const closeModal = document.getElementsByClassName('close')[0];


const originalWidth = 25;
const increasedWidth = originalWidth + 5;

clickImage.addEventListener('click', () => {
    if (!gameStarted) {
        startGame();
        gameStarted = true;
    }
    if (!gameEnded) {
        score++;
        scoreElement.textContent = `Clicks: ${score}`;
        
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

function personalDiscountCode() {
    const randomNumber = Math.floor(Math.random() * 1000);
    personalCode.textContent += "MeinCode" + randomNumber;
}

function endGame() {
    gameEnded = true;
    clickImage.style.pointerEvents = 'none';

    if (score >= 120) {
        resultElement.textContent = "Herzlichen Glückwunsch! Du hast einen 30% Rabatt Gutschein gewonnen!";
        setInterval(personalDiscountCode(), 10);
    } else if (score >= 100) {
        resultElement.textContent = "Herzlichen Glückwunsch! Du hast einen 20% Rabatt Gutschein gewonnen!";
        setInterval(personalDiscountCode(), 10);
    } else {
        resultElement.textContent = "Schade, ledier hast du nicht gewonnen. Versuche es erneut!";
        document.getElementsByClassName("personalCode").style.display = "none";
    }
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}
