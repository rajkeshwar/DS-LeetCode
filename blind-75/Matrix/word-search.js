
/**
 * 79. Word Search
 * 
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * @param {*} board 
 * @param {*} word 
 * @returns 
 */
var exist = function (board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;

  const visited = new Set();

  function dfs(r, c, i) {
    if (i === word.length) return true;
    const key = r + ',' + c;
    if (r < 0 || r >= ROWS
      || c < 0 || c >= COLS
      || visited.has(key)
      || board[r][c] !== word[i]
    ) return false;

    visited.add(key);

    const res = (
      dfs(r + 1, c, i + 1)
      || dfs(r - 1, c, i + 1)
      || dfs(r, c + 1, i + 1)
      || dfs(r, c - 1, i + 1)
    )

    visited.delete(key)

    return res;
  }


  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true