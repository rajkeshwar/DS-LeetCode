var numDecodings = function (s) {

  function dfs(s, index, memo = {}) {

    if (index in memo) return memo[index]

    if (s.charAt(index) === '0') return 0;

    if (index >= s.length - 1) return 1;

    memo[index] = dfs(s, index + 1, memo)
    if (Number(s.slice(index, index + 2)) <= 26) {
      memo[index] += dfs(s, index + 2, memo)
    }

    return memo[index]
  }
  return dfs(s, 0)
};

let ret = numDecodings('10')
console.log(ret)

/**
 * Iterative decode ways
 */

var numDecodings = function (s) {

  const DP = Array(s.length + 1).fill(0);

  DP[0] = 1;
  DP[1] = s.charAt(0) === '0' ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    if (s.charAt(i - 1) !== '0') {
      DP[i] = DP[i - 1]
    }

    const twoDigit = Number(s.slice(i - 2, i))
    if (twoDigit >= 10 && twoDigit <= 26) {
      DP[i] += DP[i - 2]
    }
  }

  return DP[s.length];
};