
/**
 * 424. Longest Repeating Character Replacement
 */
var characterReplacement = function (s, k) {
  const count = {}
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    count[s.charAt(r)] = (count[s.charAt(r)] || 0) + 1;

    while (r - l + 1 - Math.max(...Object.values(count)) > k) {
      count[s.charAt(l)] -= 1;
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }

  return res;
};