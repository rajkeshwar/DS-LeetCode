
var countSubstrings = function (s) {
  let res = 0;

  function countPalindrome(l, r) {
    let res = 0;
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      res += 1;
      l--;
      r++;
    }
    return res;
  }

  for (let i = 0; i < s.length; i++) {

    // Checking for odd lengths panlindrome
    res += countPalindrome(i, i);

    // Checking for even lengths panlindrome
    res += countPalindrome(i, i + 1);
  }

  return res;
};