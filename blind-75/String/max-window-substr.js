


function minWindow(s, t) {
  const tMap = {};

  for (let c of t.split('')) {
    tMap[c] = (tMap[c] || 0) + 1;
  }

  let res = '';
  let tLen = t.length;

  for (let i = 0; i < s.length; i++) {
    let temp = {...tMap}, count = tLen, start = false;
    let result = '';

    for (let j = i; j < s.length; j++) {
      let matchFound = (s.charAt(j) in temp) && temp[s.charAt(j)] > 0;

      if (start || matchFound) {
        start  = true;
        if (matchFound) {
          count--;
          temp[s.charAt(j)]--
        }

        result += s.charAt(j);
        if (count === 0) {
          if (res === '' || result.length < res.length) {
            res = result;
            break;
          }
        }
      }
    }
  }

  return res;
}