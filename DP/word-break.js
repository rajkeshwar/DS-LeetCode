

/**
 * 139. Word Break
 * @param {Given a string s and a dictionary of strings wordDict, 
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.} s 
 */

var wordBreak = function (s, wordDict) {
  return helper(s, wordDict);
};

function helper(s, wordDict, start = 0, memo = {}) {
  if (start === s.length) return true;
  if (start in memo) return memo[start];

  for (let end = start + 1; end <= s.length; end++) {
    const found = wordDict.indexOf(s.substring(start, end)) !== -1;
    if (found && helper(s, wordDict, end, memo)) {
      memo[start] = true;
      return memo[start];
    }
  }
  memo[start] = false;

  return memo[start];
}