

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s.charAt(i)] = (sMap[s.charAt(i)] || 0) + 1;
    tMap[t.charAt(i)] = (tMap[t.charAt(i)] || 0) + 1;
  }

  for (let char in sMap) {
    if (sMap[char] !== tMap[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('car', 'rat'))