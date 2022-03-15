

function pacific(heights) {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  const pac = new Set();
  const alt = new Set();

  function dfs(r, c, visited, prevHeight) {
    const cellKey = r + ',' + c;
    if (visited.has(cellKey)
      || c < 0 || c === COLS
      || r < 0 || r === ROWS
      || heights[r][c] < prevHeight
    ) return;

    visited.add(cellKey);

    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }

  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(ROWS - 1, c, alt, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, COLS - 1, alt, heights[r][COLS - 1]);
  }

  const res = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cellKey = r + ',' + c;
      if (pac.has(cellKey) && alt.has(cellKey)) {
        res.push([r, c]);
      }
    }
  }
  return res;
}

const input = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];

console.log(pacific(input))