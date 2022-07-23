
function clibStairs(n) {
  return climb(0, n);
}

function climb(i, n, memo = {}) {
  if (i > n) return 0;
  if (i === n) return 1;

  if (i in memo) return memo[i];

  memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);

  return memo[i];
}