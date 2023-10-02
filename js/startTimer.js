"use strict";

function renderStartTimer () {

    document.querySelector("main").innerHTML = `
    
    <div id="startTimer">

        <div id="bigEggImage>
        </div>
        <div id="timer">
        </div>
        <button id=start>Start</button>

    </div>
    `;

    document.getElementById("start").addEventListener("click", stopTimer());

}

function stopTimer() {
    document.getElementById("start").outerHTML = `<button id=start>Stop</button>`;
    
}