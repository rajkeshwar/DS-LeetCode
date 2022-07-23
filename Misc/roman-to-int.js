var romanToInt = function (s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0, i = 0;

  while (i < s.length) {
    if (i + 1 < s.length && (s.charAt(i + 1) > s.charAt(i))) {
      total += symbolMap[s.charAt(i + 1)] - symbolMap[s.charAt(i)]
      i += 2
    } else {
      total += symbolMap[s.charAt(i)]
      i++
    }
  }

  return total;
};

const ret = romanToInt('LVIII')
console.log(ret)