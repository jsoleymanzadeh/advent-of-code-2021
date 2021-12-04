let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-4-input.txt", "utf-8");
const bingoBoards = inputFile.split("\n");
let drawnNumbers = bingoBoards[0].split(",");
bingoBoards.shift();
// ---------- Part 1 ----------
(function () {
    // converts a bingo board into a matrix
    function addBoard(input, index) {
        let singleBoard = [];
        if (!input[index]) {
            input.shift();
        }
        for (let i = 0; i < 5; i++) {
            singleBoard.push(input[i + index].split(" "));
            for (let j = 0; j < 5; j++) {
                if (!singleBoard[i][j]) {
                    singleBoard[i].splice(j, 1);
                }
                singleBoard[i][j] = Number(singleBoard[i][j]);
            }
        }
        return singleBoard;
    }

    // pick a number from winning numbers list and check if it resulted in a winner amongst all bingo boards
    function pickNumber(iteration) {
        for (let i = 0; i < allBoards.length; i++) {
            for (let j = 0; j < 5; j++) {
                for (let k = 0; k < 5; k++) {
                    // track all numbers on bingo boards that have already been picked with a same size array of bingo boards
                    if (drawnNumbers[iteration] === allBoards[i][j][k]) {
                        winTracker[i][j][k] = 1;
                    }
                    // when a winning board is found, add all unpicked numbers on the winning board and record the picked number that resulted in a win
                    if ((winTracker[i][j][0] === 1 && winTracker[i][j][1] === 1 && winTracker[i][j][2] === 1 && winTracker[i][j][3] === 1 && winTracker[i][j][4] === 1) || (winTracker[i][0][k] === 1 && winTracker[i][1][k] === 1 && winTracker[i][2][k] === 1 && winTracker[i][3][k] === 1 && winTracker[i][4][k] === 1)) {
                        winnerFound = true;
                        for (let a = 0; a < 5; a++) {
                            for (let b = 0; b < 5; b++) {
                                if (winTracker[i][a][b] === 0) {
                                    unmarkedSum += allBoards[i][a][b];
                                }
                            }
                        }
                        return drawnNumbers[iteration];
                    }
                }
            }
        }
    }

    // convert all lines in the input file into an array of matrices to represent all bingo boards
    let allBoards = [];
    for (let i = 0; i < bingoBoards.length; i += 5) {
        allBoards.push(addBoard(bingoBoards, i));
    }
    // create an array of bingo boards with the same size as allBoards to track picked numbers
    let winTracker = [];
    for (let i = 0; i < allBoards.length; i++) {
        winTracker.push([]);
        for (let j = 0; j < 5; j++) {
            winTracker[i].push([]);
            for (let k = 0; k < 5; k++) {
                winTracker[i][j].push(0);
            }
        }
    }
    // convert strings in drawnNumbers array into numbers
    drawnNumbers.forEach(function (element, index) {
        drawnNumbers[index] = Number(element);
    })
    let winnerFound = false;
    let unmarkedSum = 0;
    let winningDraw;
    // pick a number from the drawnNumbers array in order until a winner is found
    for (let i = 0; i < drawnNumbers.length; i++) {
        winningDraw = pickNumber(i);
        if (winnerFound) {
            break;
        }
    }
    console.log(winningDraw * unmarkedSum);
})();