
/**
 * 3. Longest Substring Without Repeating Characters
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s.charAt(r))) {
      charSet.delete(s.charAt(l));
      l += 1;
    }
    charSet.add(s.charAt(r));
    res = Math.max(res, r - l + 1);
  }
  return res;
};