

/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {*} matrix 
 * @returns 
 */
var spiralOrder = function (matrix) {
  const results = [];

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      results.push(matrix[rowStart][i]);
    }

    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      results.push(matrix[i][colEnd]);
    }

    colEnd--;
    if (rowStart <= rowEnd && colStart <= colEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        results.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;
    if (rowStart <= rowEnd && colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        results.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }
  return results;
};