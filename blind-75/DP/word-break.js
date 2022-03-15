

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

var wordBreaks = function (s, wordDict) {
  return helper(s, wordDict);
};

function helpers(s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s === '') return true;

  for (let word of wordDict) {
    if (s.slice(0, word.length) === word) {
      memo[s] = helpers(s.slice(word.length), wordDict, memo);
      if (memo[s] === true) return true;
    }
  }

  memo[s] = false;
  return false;
}