var minWindow = function (s, t) {
  if (t === '') return '';

  let tMap = {}, count = 0;

  for (let c of t.split('')) {
    tMap[c] = (tMap[c] || 0) + 1
    count++
  }

  let i = 0, j = 0, min = s.length;
  let left = 0, right = s.length - 1;
  let found = false;

  while (j < s.length) {
    let endChar = s.charAt(j++);
    if (endChar in tMap) {
      tMap[endChar]--
      if (tMap[endChar] === 0) count--
    }

    if (count > 0) continue;

    while (count === 0) {
      let startChar = s.charAt(i++)
      if (startChar in tMap) {
        tMap[startChar]++
        if (tMap[startChar] > 0) count++
      }
    }

    if (j - i < min) {
      left = i;
      right = j;
      min = j - 1;
      found = true
    }
  }

  return found ? s.slice(i - 1, j) : '';
};