
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