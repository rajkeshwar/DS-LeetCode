
/**
 * 62. Unique Paths
 */

var uniquePaths = function (m, n) {
  return unique(m, n);
};

function unique(m, n, memo = {}) {

  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  const key = `${m},${n}`;

  if (key in memo) return memo[key];

  memo[key] = unique(m, n - 1, memo) + unique(m - 1, n, memo);

  return memo[key];
}

var uniquePathsDP = function (m, n) {
  if (m === 0 || n === 0) return 0;
  const DP = Array(m).fill().map(() => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      DP[i][j] = DP[i][j - 1] + DP[i - 1][j];
    }
  }

  return DP[m - 1][n - 1];
};


console.log(uniquePathsDP(3, 2));