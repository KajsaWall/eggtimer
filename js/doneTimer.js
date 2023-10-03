"use strict";

function renderDoneTimer () {

    const audio = new Audio();
    audio.src = "./Media/alarm.mp4";
    audio.play();

    document.querySelector("main").innerHTML = `
    
    <div id="doneTimer">
        <div id="bigEggImage"></div>
        <p id="timer">00:00</p>
        <button id="done" class="blinkingButton">Done</button>
    </div>
    `;

    document.getElementById("done").addEventListener("click", function (event) {
        audio.pause();
        renderEggPage();
    });

}