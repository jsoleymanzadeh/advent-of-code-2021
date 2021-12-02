// ---------- Part 1 ----------
(function () {
    let fileSystem = require('fs');
    let inputFile = fileSystem.readFileSync("../day-2-input.txt", "utf-8");
    let movements = inputFile.split("\n");
    let hPosition = 0;
    let depth = 0;
    for (let i = 0; i < movements.length - 1; i++) {
        if (movements[i].charAt(0) === "u") {
            depth -= Number(movements[i].replace("up ", ""));
        } else if (movements[i].charAt(0) === "d") {
            depth += Number(movements[i].replace("down ", ""));
        } else if (movements[i].charAt(0) === "f") {
            hPosition += Number(movements[i].replace("forward ", ""));
        }
    }
    console.log(hPosition * depth);
})();
// ---------- Part 2 ----------
(function () {
    let fileSystem = require('fs');
    let inputFile = fileSystem.readFileSync("../day-2-input.txt", "utf-8");
    let movements = inputFile.split("\n");
    let hPosition = 0;
    let aim = 0;
    let depth = 0;
    for (let i = 0; i < movements.length - 1; i++) {
        if (movements[i].charAt(0) === "u") {
            aim -= Number(movements[i].replace("up ", ""));
        } else if (movements[i].charAt(0) === "d") {
            aim += Number(movements[i].replace("down ", ""));
        } else if (movements[i].charAt(0) === "f") {
            hPosition += Number(movements[i].replace("forward ", ""));
            depth += aim * Number(movements[i].replace("forward ", ""));
        }
    }
    console.log(hPosition * depth);
})();