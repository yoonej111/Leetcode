/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let luckyNums = [];

    for (let i = 0; i < matrix.length; i++) {
        let minRowValue = Math.min(...matrix[i]);
        let minRowIndex = matrix[i].indexOf(minRowValue);
        let isMaxInCol = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][minRowIndex] > minRowValue) {
                isMaxInCol = false;
                break;
            }
        }
        if (isMaxInCol) {
            luckyNums.push(minRowValue);
        }
    }

    return luckyNums;
};