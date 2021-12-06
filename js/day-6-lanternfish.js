"use strict";
let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-6-input.txt", "utf-8");
let fishStates = inputFile.split(",");
// ---------- Part 1 ----------
(function () {
    // convert values from strings to numbers
    let fishTracker = []
    fishStates.forEach(function (element, index) {
        fishTracker.push(Number(element));
    })

    // advances the countdown timer for every fish and adds new fish whenever 0 is reached
    function incrementDay() {
        for (let i = 0; i < fishTracker.length; i++) {
            fishTracker[i]--;
            if (fishTracker[i] === -1) {
                fishTracker[i] = 6;
                fishTracker.push(9);
            }
        }
    }

    // run the function 80 times for 80 days
    for (let i = 0; i < 80; i++) {
        incrementDay();
    }
    console.log(fishTracker.length);
})();
// ---------- Part 2 (heavily inspired by https://github.com/LucasHMS) ----------
(function () {
    // convert values from strings to numbers
    let fishTracker = []
    fishStates.forEach(function (element, index) {
        fishTracker.push(Number(element));
    })
    // put all the fish into an array with their index based on the number of days until spawning a new fish
    let fishCountPerDay = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let babyFish = 0;
    let totalFish = 0;
    fishTracker.forEach(function (element) {
        fishCountPerDay[element]++;
    });
    // for each day, move all fish at count 0 to count 7 and shift array, then push the original count 0 fish to begin at index 8
    for (let i = 0; i < 256; i++) {
        fishCountPerDay[7] += fishCountPerDay[0];
        babyFish = fishCountPerDay.shift();
        fishCountPerDay.push(babyFish);
    }
    // add the amounts of fish in each count together for the solution
    fishCountPerDay.forEach(function (element) {
        totalFish += element;
    })
    console.log(totalFish);
})();