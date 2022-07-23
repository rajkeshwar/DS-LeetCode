var lengthOfLongestSubstringKDistinct = function (s, k) {
  // eceba

  if (s * k === 0) return 0;

  let l = 0, r = 0, longest = 0;
  const charMap = {}

  while (r < s.length) {
    let endChar = s.charAt(r);
    charMap[endChar] = r;

    if (Object.keys(charMap).length === k + 1) {
      let lowerIndex = Math.min(...Object.values(charMap));
      delete charMap[s.charAt(lowerIndex)]
      l = lowerIndex + 1
    }
    longest = Math.max(longest, r - l + 1)
    r++
  }

  return longest;
};

let ret = lengthOfLongestSubstringKDistinct('eceba', 2);
console.log(ret)