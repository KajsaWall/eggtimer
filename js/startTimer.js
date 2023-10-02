"use strict";

function renderStartTimer () {

    document.querySelector("main").innerHTML = `
    
    <div id="startTimer">

        <div id="bigEggImage>
        </div>
        <p id="timer"></p>
        <button id=start>Start</button>

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
    }

}