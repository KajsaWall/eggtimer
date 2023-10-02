"use strict";

function renderEggPage() {

    document.querySelector("main").innerHTML = `
    
    <div id="eggPage">

        <div id="eggSize">
            <p>Select size of your egg</p>
            <div>
                <div class="s">
                    <button>S</button>
                    <p>"<50g"</p>
                </div>
                <div class="m">
                    <button>M</button>
                    <p>"60g"</p>
                </div>
                <div class="l">
                    <button>L</button>
                    <p>">70g"</p>
                </div>
            </div>
        </div>

        <div id="eggHardness">
            <p>Select hardness of your egg</p>
            <div>
                <div class="soft">
                    <div class="eggImage">
                    </div>
                    <button>Soft</button>
                </div>
                <div class="medium">
                    <div class="eggImage">
                    </div>
                    <button>Medium</button>
                </div>
                <div class="soft">
                    <div class="eggImage">
                    </div>
                    <button>Hard</button>
                </div>
            </div>

        </div>

    </div>
    <button id=next>Next</button>
    `;

    document.getElementById("next").addEventListener("click", (renderStartTimer));

}