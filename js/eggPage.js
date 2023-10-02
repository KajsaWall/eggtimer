"use strict";

function renderEggPage() {
    document.querySelector("main").innerHTML = `
    <div id="eggPage">
        <div id="eggSize">
            <p>Select size of your egg</p>
            <div>
                <div>
                    <button id="s">S</button>
                    <p><50g</p>
                </div>
                <div>
                    <button id="m">M</button>
                    <p>60g</p>
                </div>
                <div>
                    <button id="l">L</button>
                    <p>>70g</p>
                </div>
            </div>
        </div>
        <div id="eggHardness">
            <p>Select hardness of your egg</p>
            <div>
                <div>
                    <div class="eggImage">
                    </div>
                    <button id="soft">Soft</button>
                </div>
                <div>
                    <div class="eggImage">
                    </div>
                    <button id="medium">Medium</button>
                </div>
                <div>
                    <div class="eggImage">
                    </div>
                    <button id="hard">Hard</button>
                </div>
            </div>
        </div>
    </div>
    <button id="next">Next</button>
    `;

    const eggSizeButtons = document.querySelectorAll("#eggSize button");
    const eggHardnessButtons = document.querySelectorAll("#eggHardness button");

    eggSizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove "marked" class from all egg size buttons
            eggSizeButtons.forEach(btn => btn.classList.remove("marked"));
            // Add "marked" class to the clicked button
            button.classList.add("marked");
        });
    });

    eggHardnessButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove "marked" class from all egg hardness buttons
            eggHardnessButtons.forEach(btn => btn.classList.remove("marked"));
            // Add "marked" class to the clicked button
            button.classList.add("marked");
        });
    });

    document.getElementById("next").addEventListener("click", renderStartTimer);
}
