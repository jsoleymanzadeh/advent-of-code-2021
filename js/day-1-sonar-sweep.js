let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-1-input.txt", "utf-8");
let depths = inputFile.split("\n");
// ---------- Part 1 ----------
(function () {
    let count = 0;
    for (let i = 0; i < depths.length; i++) {
        if (!depths[i + 1]) {
            break;
        }
        if (depths[i + 1] > depths[i]) {
            count++;
        }
    }
    console.log(count);
})();
// ---------- Part 2 ----------
(function () {
    let count = 0;
    for (let i = 0; i < depths.length; i++) {
        if (!depths[i + 3]) {
            break;
        }
        if (Number(depths[i + 1]) + Number(depths[i + 2]) + Number(depths[i + 3]) > Number(depths[i]) + Number(depths[i + 1]) + Number(depths[i + 2])) {
            count++;
        }
    }
    console.log(count);
})();