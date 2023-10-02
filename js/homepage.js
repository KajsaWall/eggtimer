"use strict";

function renderHomePage () {

    document.querySelector("main").innerHTML = `
    
    <div id="homePage">
        <h3>Let's get cooking!</h3>
        <p>Put your egg in after the water starts boiling!"
    </div>
    <button id=next>Next</button>
    `;

    document.getElementById("next").addEventListener("click", renderEggPage());

}