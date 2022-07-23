

var minWindow = function (s, t) {
  if (t === '') return ''

  const tMap = {}, orgMap = {};
  const haveMap = {};

  let resLen = t.length, res = s;

  for (let c of t.split('')) {
    tMap[c] = (tMap[c] || 0) + 1
    orgMap[c] = tMap[c]
  }

  let l = 0, r = 0;

  while (r < s.length) {

    while (l < r && !(s.charAt(l) in orgMap)) l++

    haveMap[s.charAt(r)] = (haveMap[s.charAt(r)] || 0) + 1

    if (tMap[s.charAt(r)] > 0) {
      tMap[s.charAt(r)]--
      resLen--
    }

    while (resLen === 0 && l < r && haveMap) {
      let current = s.slice(l, r + 1);
      if (current.length < res.length) {
        res = current;
      }

      if (haveMap[s.charAt(l)] < tMap[s.charAt(l)]) {

        if (r - l + 1 <= t.length) {
          return s.slice(l, r + 1)
        }

        tMap[s.charAt(l)]++
        resLen++
      }

      l++
    }

    r++
  }

  return res;
};

const ret = minWindow("ADOBECODEBANC", "ABC");
// const ret = minWindow("bba", "ab");
console.log(ret)