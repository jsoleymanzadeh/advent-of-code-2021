let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-3-input.txt", "utf-8");
const diagCodes = inputFile.split("\n");
// ---------- Part 1 ----------
(function () {
    let bitCounts = [];
    for(let i = 0; i < diagCodes[0].length; i++) {
        bitCounts.push(0);
    }
    // adds one for each instance of 1 in a certain position and subtracts one for each instance of 0 in a certain position
    for (let i = 0; i < diagCodes.length; i++) {
        for (let j = 0; j < diagCodes[0].length; j++) {
            if (Number(diagCodes[i].charAt(j)) == 1) {
                bitCounts[j]++;
            } else {
                bitCounts[j]--;
            }
        }
    }
    // sets bit count array values to the most common bits in each position (1 if positive and 0 if negative)
    for (let i = 0; i < bitCounts.length; i++) {
        if (bitCounts[i] < 0) {
            bitCounts[i] = 0;
        } else {
            bitCounts[i] = 1;
        }
    }
    // converts array of bits into a binary string, then into an integer for multiplication
    let gammaRate = parseInt(bitCounts.join("").toString(), 2);
    // sets bit count array values to the least common bits in each position (0 if positive and 1 if negative)
    for (let i = 0; i < bitCounts.length; i++) {
        if (bitCounts[i] === 0) {
            bitCounts[i] = 1;
        } else {
            bitCounts[i] = 0;
        }
    }
    // converts array of bits into a binary string, then into an integer for multiplication
    let epsilonRate = parseInt(bitCounts.join("").toString(), 2);
    console.log(gammaRate * epsilonRate);
})();
// ---------- Part 2 ----------
(function () {
    // finds the most common bit at one position for comparison
    function getMostCommonBit(input, position) {
        let mostCommonResult = 0;
        // set mostCommonResult based on the bit at one position of all codes
        for (let i = 0; i < input.length; i++) {
            if (Number(input[i].charAt(position)) === 1) {
                mostCommonResult++;
            } else {
                mostCommonResult--;
            }
        }
        // set mostCommonResult to be 0 if negative and 1 if positive or zero
        if (mostCommonResult >= 0) {
            return 1;
        } else {
            return 0;
        }
    }
    // finds the least common bit at one position for comparison
    function getLeastCommonBit(input, position) {
        let leastCommonResult = 0;
        // set leastCommonResult based on the bit at one position of all codes
        for (let i = 0; i < input.length; i++) {
            if (Number(input[i].charAt(position)) === 1) {
                leastCommonResult++;
            } else {
                leastCommonResult--;
            }
        }
        // set leastCommonResult to be 1 if negative and 0 if positive or zero
        if (leastCommonResult >= 0) {
            return 0;
        } else {
            return 1;
        }
    }
    // splices out all codes in an array which do not match the comparison bit with the bit at the specified position until only 1 code remains
    function getCode(input, comparisonBit, position) {
        if (input.length === 1) {
            return;
        }
        let changesMade = 0;
        do {
            changesMade = 0;
            for (let i = 0; i < input.length; i++) {
                if (Number(input[i].charAt(position)) !== comparisonBit) {
                    input.splice(i, 1);
                    changesMade++;
                }
            }
        } while (changesMade > 0);
    }
    // declares two arrays for separate manipulations
    let oxygenRating = [...diagCodes];
    let co2Rating = [...diagCodes];
    // conducts splicing at all positions for both arrays
    for (let a = 0; a < diagCodes[0].length; a++) {
        getCode(oxygenRating, getMostCommonBit(oxygenRating, a), a);
        getCode(co2Rating, getLeastCommonBit(co2Rating, a), a);
    }
    // convert the binary string to an integer for multiplication to find the answer
    console.log(parseInt(oxygenRating.join("").toString(), 2) * parseInt(co2Rating.join("").toString(), 2));
})();