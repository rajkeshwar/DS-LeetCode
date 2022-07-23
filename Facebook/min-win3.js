var minWindow = function (s, t) {
  if (t === '') return '';

  const needMap = {}, haveMap = {}
  let formed = 0, required = 0

  let l = 0, r = 0;
  let res = [Infinity, -1, -1]

  for (let c of t.split('')) {
    needMap[c] = (needMap[c] || 0) + 1
  }

  required = Object.keys(needMap).length;

  while (r < s.length) {
    let rightChar = s.charAt(r)
    haveMap[rightChar] = (haveMap[rightChar] || 0) + 1

    if (needMap[rightChar] === haveMap[rightChar]) {
      formed++

      while (required === formed) {

        if ((r - l + 1) < res[0]) {
          res = [r - l + 1, l, r]
        }

        let leftChar = s.charAt(l)
        haveMap[leftChar]--

        if (haveMap[leftChar] < needMap[leftChar]) {
          formed--
        }

        l++
      }
    }

    r++
  }

  return res[0] === Infinity ? '' : s.slice(res[1], res[2] + 1)
};


const ret = minWindow('ADOBECODEBANC', 'ABC')
console.log(ret);