"use strict";
let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-6-input.txt", "utf-8");
const fishStates = inputFile.split(",");
// ---------- Part 1 ----------
(function () {
    // convert values from strings to numbers
    fishStates.forEach(function (element, index) {
        fishStates[index] = Number(element);
    })

    // advances the countdown timer for every fish and adds new fish whenever 0 is reached
    function incrementDay() {
        for (let i = 0; i < fishStates.length; i++) {
            fishStates[i]--;
            if (fishStates[i] === -1) {
                fishStates[i] = 6;
                fishStates.push(9);
            }
        }
    }

    // run the function 80 times for 80 days
    for (let i = 0; i < 80; i++) {
        incrementDay();
    }
    console.log(fishStates.length);
})();