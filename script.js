let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
    display.textContent =
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

startBtn.onclick = function () {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
};

pauseBtn.onclick = function () {
    running = false;
    clearInterval(timer);
};

resetBtn.onclick = function () {
    running = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    laps.innerHTML = "";
};

lapBtn.onclick = function () {
    if (running) {
        const li = document.createElement("li");
        li.textContent = display.textContent;
        laps.appendChild(li);
    }
};
