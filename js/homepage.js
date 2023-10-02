"use strict";

function renderHomePage () {

    document.querySelector("main").innerHTML = `
    
    <div id="homePage">
        <div class=line>
        </div>
        <div id=startInfo>
            <p>Before you begin, remember to place the egg in boiling water before starting the timer in the final step.</p>
            <div>
            </div>
        </div>
        <div class=line>
        </div>
    </div>
    <button id=next>Let's get started!</button>
    `;

    document.getElementById("next").addEventListener("click", renderEggPage);

}