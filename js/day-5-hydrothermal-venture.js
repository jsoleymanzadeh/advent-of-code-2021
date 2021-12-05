let fileSystem = require('fs');
let inputFile = fileSystem.readFileSync("../day-5-input.txt", "utf-8");
const textFromInput = inputFile.split("\n");
// ---------- Part 1 ----------
// (function () {
//     let tempLines1 = [];
//     let tempLines2 = [];
//     let tempLines3 = [];
//     let tempLines4 = [];
//     // separate line endpoints by "->"
//     for (let i = 0; i < textFromInput.length; i++) {
//         tempLines1.push(textFromInput[i].split(" -> "));
//     }
//     // separate x and y values
//     for (let i = 0; i < tempLines1.length; i++) {
//         for (let j = 0; j < tempLines1[0].length; j++) {
//             tempLines2.push(tempLines1[i][j].split(","));
//         }
//     }
//     // convert x and y values to numbers
//     for (let i = 0; i < tempLines1.length * 2; i++) {
//         for (let j = 0; j < tempLines1[0].length; j++) {
//             tempLines2[i][j] = Number(tempLines2[i][j]);
//         }
//     }
//     // put line endpoints into pairs
//     for (let i = 0; i < tempLines2.length / 2; i++) {
//         tempLines3.push([]);
//     }
//     let a = 0;
//     for (let i = 0; i < tempLines3.length; i++) {
//         tempLines3[i].push(tempLines2[a]);
//         tempLines3[i].push(tempLines2[a + 1]);
//         a += 2;
//     }
//     // add all points in between endpoints to the same line segment
//     for (let i = 0; i < tempLines3.length; i++) {
//         if (!tempLines3[i]) {
//             break;
//         }
//         // if x values are the same
//         if (tempLines3[i][0][0] === tempLines3[i][1][0]) {
//             // if y1 is greater than y2
//             if (tempLines3[i][0][1] > tempLines3[i][1][1]) {
//                 for (let a = tempLines3[i][1][1] + 1; a < tempLines3[i][0][1]; a++) {
//                     tempLines3[i].push([tempLines3[i][0][0], a]);
//                 }
//             }
//             // if y1 is less than y2
//             else if (tempLines3[i][0][1] < tempLines3[i][1][1]) {
//                 for (let a = tempLines3[i][0][1] + 1; a < tempLines3[i][1][1]; a++) {
//                     tempLines3[i].push([tempLines3[i][0][0], a]);
//                 }
//             }
//         }
//         // if y values are the same
//         else if (tempLines3[i][0][1] === tempLines3[i][1][1]) {
//             // if x1 is greater than x2
//             if (tempLines3[i][0][0] > tempLines3[i][1][0]) {
//                 for (let a = tempLines3[i][1][0] + 1; a < tempLines3[i][0][0]; a++) {
//                     tempLines3[i].push([a, tempLines3[i][0][1]]);
//                 }
//             }
//             // if x1 is less than x2
//             else if (tempLines3[i][0][0] < tempLines3[i][1][0]) {
//                 for (let a = tempLines3[i][0][0] + 1; a < tempLines3[i][1][0]; a++) {
//                     tempLines3[i].push([a, tempLines3[i][0][1]])
//                 }
//             }
//         }
//         // if the line segment is not horizontal or vertical, remove it from the array
//         else {
//             tempLines3.splice(i, 1);
//             i--;
//         }
//     }
//     // push all points from all line segments into a new array
//     for (let i = 0; i < tempLines3.length; i++) {
//         for (let j = 0; j < tempLines3[i].length; j++) {
//             tempLines4.push(tempLines3[i][j].toString());
//         }
//     }
//     // compare every point to all subsequent points
//     // if there is a duplicate point, and it does not already exist in the point tracker, increase intersections count and add that point to the tracker
//     let intersections = 0;
//     let pointsOfIntersect = [];
//     for (let i = 0; i < tempLines4.length; i++) {
//         for (let j = i + 1; j < tempLines4.length; j++) {
//             if (tempLines4[i] === tempLines4[j] && !pointsOfIntersect.includes(tempLines4[i])) {
//                 pointsOfIntersect.push(tempLines4[i]);
//                 intersections++;
//             }
//         }
//     }
//     console.log(intersections);
// })();
// ---------- Part 2 ----------
(function () {
    let tempLines1 = [];
    let tempLines2 = [];
    let tempLines3 = [];
    let tempLines4 = [];
    // separate line endpoints by "->"
    for (let i = 0; i < textFromInput.length; i++) {
        tempLines1.push(textFromInput[i].split(" -> "));
    }
    // separate x and y values
    for (let i = 0; i < tempLines1.length; i++) {
        for (let j = 0; j < tempLines1[0].length; j++) {
            tempLines2.push(tempLines1[i][j].split(","));
        }
    }
    // convert x and y values to numbers
    for (let i = 0; i < tempLines1.length * 2; i++) {
        for (let j = 0; j < tempLines1[0].length; j++) {
            tempLines2[i][j] = Number(tempLines2[i][j]);
        }
    }
    // put line endpoints into pairs
    for (let i = 0; i < tempLines2.length / 2; i++) {
        tempLines3.push([]);
    }
    let a = 0;
    for (let i = 0; i < tempLines3.length; i++) {
        tempLines3[i].push(tempLines2[a]);
        tempLines3[i].push(tempLines2[a + 1]);
        a += 2;
    }
    // add all points in between endpoints to the same line segment
    for (let i = 0; i < tempLines3.length; i++) {
        // if x values are the same
        if (tempLines3[i][0][0] === tempLines3[i][1][0]) {
            // if y1 is greater than y2
            if (tempLines3[i][0][1] > tempLines3[i][1][1]) {
                for (let a = tempLines3[i][1][1] + 1; a < tempLines3[i][0][1]; a++) {
                    tempLines3[i].push([tempLines3[i][0][0], a]);
                }
            }
            // if y1 is less than y2
            else if (tempLines3[i][0][1] < tempLines3[i][1][1]) {
                for (let a = tempLines3[i][0][1] + 1; a < tempLines3[i][1][1]; a++) {
                    tempLines3[i].push([tempLines3[i][0][0], a]);
                }
            }
        }
        // if y values are the same
        else if (tempLines3[i][0][1] === tempLines3[i][1][1]) {
            // if x1 is greater than x2
            if (tempLines3[i][0][0] > tempLines3[i][1][0]) {
                for (let a = tempLines3[i][1][0] + 1; a < tempLines3[i][0][0]; a++) {
                    tempLines3[i].push([a, tempLines3[i][0][1]]);
                }
            }
            // if x1 is less than x2
            else if (tempLines3[i][0][0] < tempLines3[i][1][0]) {
                for (let a = tempLines3[i][0][0] + 1; a < tempLines3[i][1][0]; a++) {
                    tempLines3[i].push([a, tempLines3[i][0][1]])
                }
            }
        }
        // if x1 and y1 are greater than x2 and y2
        else if (tempLines3[i][0][0] > tempLines3[i][1][0] && tempLines3[i][0][1] > tempLines3[i][1][1]) {
            for (let a = 1; a < tempLines3[i][0][0] - tempLines3[i][1][0]; a++) {
                tempLines3[i].push([tempLines3[i][1][0] + a, tempLines3[i][1][1] + a]);
            }
        }
        // if x1 and y1 are less than x2 and y2
        else if (tempLines3[i][0][0] < tempLines3[i][1][0] && tempLines3[i][0][1] < tempLines3[i][1][1]) {
            for (let a = 1; a < tempLines3[i][1][0] - tempLines3[i][0][0]; a++) {
                tempLines3[i].push([tempLines3[i][0][0] + a, tempLines3[i][0][1] + a]);
            }
        }
        // if x1 is greater than x2, but y1 is less than y2
        else if (tempLines3[i][0][0] > tempLines3[i][1][0] && tempLines3[i][0][1] < tempLines3[i][1][1]) {
            for (let a = 1; a < tempLines3[i][0][0] - tempLines3[i][1][0]; a++) {
                tempLines3[i].push([tempLines3[i][1][0] + a, tempLines3[i][1][1] - a]);
            }
        }
        // if x1 is less than x2, but y1 is greater than y2
        else if (tempLines3[i][0][0] < tempLines3[i][1][0] && tempLines3[i][0][1] > tempLines3[i][1][1]) {
            for (let a = 1; a < tempLines3[i][1][0] - tempLines3[i][0][0]; a++) {
                tempLines3[i].push([tempLines3[i][0][0] + a, tempLines3[i][0][1] - a]);
            }
        }
    }
    // push all points from all line segments into a new array
    for (let i = 0; i < tempLines3.length; i++) {
        for (let j = 0; j < tempLines3[i].length; j++) {
            tempLines4.push(tempLines3[i][j].toString());
        }
    }
    // compare every point to all subsequent points
    // if there is a duplicate point, and it does not already exist in the point tracker, increase intersections count and add that point to the tracker
    let intersections = 0;
    let pointsOfIntersect = [];
    for (let i = 0; i < tempLines4.length; i++) {
        for (let j = i + 1; j < tempLines4.length; j++) {
            if (tempLines4[i] === tempLines4[j] && !pointsOfIntersect.includes(tempLines4[i])) {
                pointsOfIntersect.push(tempLines4[i]);
                intersections++;
            }
        }
    }
    console.log(intersections);
})();