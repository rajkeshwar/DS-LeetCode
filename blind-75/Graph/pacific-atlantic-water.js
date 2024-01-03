var pacificAtlanticOld = function (heights) {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  const pac = new Set();
  const alt = new Set();

  function dfs(r, c, visit, prevHeight) {
    const cellKey = r + "," + c;
    if (
      visit.has(cellKey) ||
      r < 0 ||
      r === ROWS ||
      c < 0 ||
      c === COLS ||
      heights[r][c] < prevHeight
    )
      return;

    visit.add(cellKey);

    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }

  for (let c = 0; c < COLS; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(ROWS - 1, c, alt, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, COLS - 1, alt, heights[r][COLS - 1]);
  }

  const resp = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cellKey = r + "," + c;
      if (pac.has(cellKey) && alt.has(cellKey)) {
        resp.push([r, c]);
      }
    }
  }

  return resp;
};

var pacificAtlantic = function (heights) {
  const ROWS = heights.length;
  const COLS = heights[0].length;

  const pac = new Set();
  const alt = new Set();

  function dfs(r, c, visited, preHeight) {
    const cellKey = r + "," + c;
    if (
      visited.has(cellKey) ||
      r < 0 ||
      r === ROWS ||
      c < 0 ||
      c === COLS ||
      heights[r][c] < preHeight
    )
      return;

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
      const cellKey = r + "," + c;
      if (pac.has(cellKey) && alt.has(cellKey)) {
        res.push([r, c]);
      }
    }
  }

  return res;
};

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlanticOld(heights));
