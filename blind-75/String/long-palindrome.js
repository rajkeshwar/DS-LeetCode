

function longPalindrome(str) {
  let res = '';
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let l = r = i;
    while (l >= 0 && r < str.length) {
      if ((r - l + 1) > maxLen && str.charAt(l) === str.charAt(r)) {
        maxLen = r - l + 1;
        res = str.slice(l, r + 1);
      }
      l -= 1;
      r += 1;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < str.length) {
      if ((r - l + 1) > maxLen && str.charAt(l) === str.charAt(r)) {
        maxLen = r - l + 1;
        res = str.slice(l, r + 1);
      }
      l -= 1;
      r += 1;
    }

  }

  return res;
}


const ret = longPalindrome('babab');

console.log(ret)