"use strict";

const combinations = [
    {
        eggSize: "S",
        eggHardness: "Soft",
        message: "6"
    },
    {
        eggSize: "S",
        eggHardness: "Medium",
        message: "8"
    },
    {
        eggSize: "S",
        eggHardness: "Hard",
        message: "10"
    },
    {
        eggSize: "M",
        eggHardness: "Soft",
        message: "7"
    },
    {
        eggSize: "M",
        eggHardness: "Medium",
        message: "9"
    },
    {
        eggSize: "M",
        eggHardness: "Hard",
        message: "11"
    },
    {
        eggSize: "L",
        eggHardness: "Soft",
        message: "8"
    },
    {
        eggSize: "L",
        eggHardness: "Medium",
        message: "10"
    },
    {
        eggSize: "L",
        eggHardness: "Hard",
        message: "12"
    }
];

// Define variables to store selected buttons and combination
let selectedSizeButton = null;
let selectedHardnessButton = null;
let selectedCombination = null;

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

        <div class="line"></div>

        <div id="eggHardness">
            <p>Select hardness of your egg</p>
            <div>
                <div>
                    <div class="eggImageSoft">
                    </div>
                    <button id="soft">Soft</button>
                </div>
                <div>
                    <div class="eggImageMedium">
                    </div>
                    <button id="medium">Medium</button>
                </div>
                <div>
                    <div class="eggImageHard">
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
            // Set the selectedSizeButton
            selectedSizeButton = button;

            // Check if both egg size and hardness have been selected
            if (selectedSizeButton && selectedHardnessButton) {
                // Find the combination in the predefined array
                selectedCombination = combinations.find(
                    combo => combo.eggSize === selectedSizeButton.textContent.trim() &&
                              combo.eggHardness === selectedHardnessButton.textContent.trim()
                );
            }
        });
    });

    eggHardnessButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove "marked" class from all egg hardness buttons
            eggHardnessButtons.forEach(btn => btn.classList.remove("marked"));
            // Add "marked" class to the clicked button
            button.classList.add("marked");
            // Set the selectedHardnessButton
            selectedHardnessButton = button;

            // Check if both egg size and hardness have been selected
            if (selectedSizeButton && selectedHardnessButton) {
                // Find the combination in the predefined array
                selectedCombination = combinations.find(
                    combo => combo.eggSize === selectedSizeButton.textContent.trim() &&
                              combo.eggHardness === selectedHardnessButton.textContent.trim()
                );
            }
        });
    });

    console.log(selectedCombination);
    document.getElementById("next").addEventListener("click", renderStartTimer);
}
