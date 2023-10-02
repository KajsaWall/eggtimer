"use strict";

function renderEggPage() {

    document.querySelector("main").innerHTML = `
    
    <div id="eggPage">

        <div id="eggSize">
            <p>Select size of your egg</p>
            <div class="small">
                <button>S</button>
                <p>">60g"</p>
            </div>
            <div class="medium">
                <button>M</button>
                <p>">60g"</p>
            </div>
            <div class="large">

            </div>
        </div>

        <div id="eggHardness">

        </div>

    </div>
    <button id=next>Next</button>
    `;

    document.getElementById("next").addEventListener("click", ());

}