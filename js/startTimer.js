"use strict";

let timerInterval; // Variable to store the interval ID
let isTimerRunning = false; // Flag to track whether the timer is running or paused
let startingMinutes = 0; // Initial starting time in minutes
let remainingTime = 0; // Variable to store the remaining time




function renderStartTimer() {

    
 timerInterval; // Variable to store the interval ID
 isTimerRunning = false; // Flag to track whether the timer is running or paused
 startingMinutes = 0; // Initial starting time in minutes
 remainingTime = 0; // Variable to store the remaining time

    let startTime = selectedCombination.message;
    startTime = startTime < 10 ? `0` + startTime : startTime;

    document.querySelector("main").innerHTML = `
    <div id="backButton"> < </div>
    <div id="startTimer">
        <div id="bigEggImage">
            <div class="egg"></div>
        </div>
        <p id="timer">${startTime + ":00"}</p>
        <button id="start">Start</button>
    </div>
    `;

    document.getElementById("start").addEventListener("click", toggleTimer);
    document.getElementById("backButton").addEventListener("click", renderEggPage);
}

function toggleTimer() {
    let eggImage = document.querySelector(".egg");

    if (!isTimerRunning && (document.getElementById("start").textContent == "Start")) {
        // Timer starts or resumes
        eggImage.classList.add("egg", "bounce");
        document.getElementById("start").classList.add("pause");

        document.getElementById("start").textContent = "Pause";
        isTimerRunning = true;

        if (remainingTime === 0) {
            // If no remaining time, use the initial starting time
            startingMinutes = selectedCombination.message;
            remainingTime = startingMinutes * 60;

        } 

        const countdownElement = document.getElementById("timer");
        
        function updateCountdown() {
            
            let minutes = Math.floor(remainingTime / 60);
            let seconds = remainingTime % 60;

            seconds = seconds < 10 ? `0` + seconds : seconds;
            minutes = minutes < 10 ? `0` + minutes : minutes;

            countdownElement.textContent = `${minutes}:${seconds}`;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(timerInterval); // Clear the interval when time reaches 0
                document.getElementById("start").textContent = "Start";
                isTimerRunning = false;
                renderDoneTimer();
            }
        }
        
        //updateCountdown(); // Initial call to display the time immediately
        timerInterval = setInterval(updateCountdown, 1000);

        document.getElementById("start").addEventListener("click", function() {
            if (isTimerRunning) {
                console.log("pausat");
                clearInterval(timerInterval); // Pause the timer by clearing the interval
                eggImage.classList.remove("bounce");
                document.getElementById("start").textContent = "Resume";
                document.getElementById("start").classList.remove("pause");

            } else {
                console.log("resume");
                timerInterval = setInterval(updateCountdown, 1000); // Resume the timer
                eggImage.classList.add("egg", "bounce");
                document.getElementById("start").textContent = "Pause";
                document.getElementById("start").classList.add("pause");
            }
            isTimerRunning = !isTimerRunning; // Toggle the timer state
        });
        
    };
    
}


