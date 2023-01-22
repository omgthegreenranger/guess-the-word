// ############## DOM queries
let startpush = document.querySelector('#start');
let timerEl = document.getElementById('time-left');

// ############## Event Listeners
// Start Button Event
startpush.addEventListener('click', function() {
    countdown();
});

// Get the keypress
document.addEventListener("keypress", function (event) {
    let keyPress = event.key;
    console.log(keyPress);
});

// timer interval
function countdown() {
    let timeLeft = 10;

    let timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
};

// Playfield Script

// Playfield Word

let wordList = ["this", "computer", "jackfire", "argument"];
let pickWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(pickWord);

// Scoreboard script

// Get IDs for win and lose score

init();

function getScores() {

    let win = localStorage.getItem("win");
    let lose = localStorage.getItem("lose");


    let winScore = document.querySelector('#win-score');
    let loseScore = document.querySelector('#lose-score');

    winScore.textContent = win;
    loseScore.textContent = lose;
};

function init() {
    getScores();
};

// Use temporary events for win and lose
let winPush = document.querySelector('#temp-win');
let losePush = document.querySelector('#temp-lose');

winPush.addEventListener("click", function() {
    win++;
    localStorage.setItem("win",win);

    getScores();
});

losePush.addEventListener("click", function(){
    lose++;
    localStorage.setItem("lose",lose);

    getScores();
});