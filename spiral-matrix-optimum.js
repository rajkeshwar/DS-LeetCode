var spiralOrder = function(matrix) {
  let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;

  let ans = [];
  while (left <= right && top <= bottom) {
      // top row
      for (let i = left; i <= right; i++) {
          ans.push(matrix[top][i]);
      }
      top++;
      
      // right column
      for (let i = top; i <= bottom && left <= right; i++) {
          ans.push(matrix[i][right]);
      }
      right--;
      
      // bottom row
      for (let i = right; i >= left && top <= bottom; i--) {
          ans.push(matrix[bottom][i]);
      }
      bottom--;
      
      // left column
      for (let i = bottom; i >= top && left <= right; i--) {
          ans.push(matrix[i][left]);
      }
      left++;
  }
  return ans;
};


console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))