
/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * @param {*} matrix 
 */

var rotate = function (matrix) {
  let l = 0;
  let r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      let top = l, bottom = r;

      // Save top left 
      let topLeft = matrix[top][l + i];

      // Move bottomLeft into topLeft
      matrix[top][l + i] = matrix[bottom - i][l]

      // Move bottomRight into bottomLeft
      matrix[bottom - i][l] = matrix[bottom][r - i]

      // Move topRight into bottomRight
      matrix[bottom][r - i] = matrix[top + i][r];

      // Move topLeft into topRight
      matrix[top + i][r] = topLeft;
    }
    l++;
    r--;
  }
};


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]