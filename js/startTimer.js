"use strict";

function renderStartTimer () {

    document.querySelector("main").innerHTML = `
    
    <div id="startTimer">
        <div id="bigEggImage"></div>
        <p id="timer"></p>
        <button id="start">Start</button>
    </div>
    `;

    document.getElementById("start").addEventListener("click", toggleTimer);

}

function toggleTimer() {


    if(document.getElementById("start").textContent === "Start") {
        document.getElementById("start").textContent = "Stop"
        //Timer pauses 
    } else {
        document.getElementById("start").textContent = "Start"
        //Timer starts
        
    console.log(selectedCombination.message);
    let startingMinutes = selectedCombination.message;
    let time = startingMinutes * 60;

    const countdownElement = document.getElementById("timer");

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownElement.textContent = `${minutes}: ${seconds}`;
        time--;
        document.getElementById("timer").textContent = time;
    }

    setInterval(updateCountdown, 1000);
    }

}