let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-1-input.txt", "utf-8");
let depths = inputFile.split("\n");
// ---------- Part 1 ----------
(function () {
    let count = 0;
    // compare each value in the array with the value in the next index and increment count when the next value is higher
    for (let i = 0; i < depths.length - 1; i++) {
        if (depths[i + 1] > depths[i]) {
            count++;
        }
    }
    console.log(count);
})();
// ---------- Part 2 ----------
(function () {
    let count = 0;
    // compare the sum of 3 consecutive values in the array with the sum of 3 consecutive indices starting with the next index and increment count when the next sum is higher
    for (let i = 0; i < depths.length - 1; i++) {
        if (Number(depths[i + 1]) + Number(depths[i + 2]) + Number(depths[i + 3]) > Number(depths[i]) + Number(depths[i + 1]) + Number(depths[i + 2])) {
            count++;
        }
    }
    console.log(count);
})();