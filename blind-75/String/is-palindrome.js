

var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  function isChar(c) {
    return /[a-zA-Z0-9]/i.test(s.charAt(c));
  }

  while (l <= r) {
    while (l < r && !isChar(l)) l++;
    while (l < r && !isChar(r)) r--;
    if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {
      return false;
    }
    l++
    r--
  }

  return true;
};

const input = "A man, a plan, a canal: Panama";

console.log(isPalindrome(input));