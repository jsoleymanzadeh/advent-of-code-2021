"use strict";
let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-7-input.txt", "utf-8");
let positionsInput = inputFile.split(",");
// ---------- Part 1 ----------
(function () {
    let hPositions = [];
    positionsInput.forEach(function (element, index) {
        hPositions.push(Number(element));
    })
    // sort array to make it easier to find the median
    hPositions.sort(function (a, b) {
        return a - b;
    });
    // find the median
    let median = (hPositions[hPositions.length / 2] + hPositions[(hPositions.length / 2) - 1]) / 2;
    // calculate the distance from every position to the median and add to totalGas
    let totalGas = 0;
    hPositions.forEach(function (element) {
        totalGas += Math.abs(median - element);
    });
    console.log(totalGas);
})();