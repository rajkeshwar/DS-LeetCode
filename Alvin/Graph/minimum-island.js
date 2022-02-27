

function minimumIsland(grid) {
  const visited = new Set();
  let minCount = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const count = explore(grid, r, c, visited);
      if (count > 0 && count < minCount) {
        minCount = count;
      }
    }
  }

  return minCount;
}

function explore(grid, r, c, visited) {
  const rowInbounds = r >= 0 && r < grid.length;
  const colInbounds = c >= 0 && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;
  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let count = 1;

  count += explore(grid, r + 1, c, visited);
  count += explore(grid, r - 1, c, visited);
  count += explore(grid, r, c + 1, visited);
  count += explore(grid, r, c - 1, visited);

  return count;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
]

console.log('Count: ', minimumIsland(grid));