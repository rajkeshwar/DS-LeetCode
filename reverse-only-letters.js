/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let start = 0;
  const words = s.split('');
  let end = words.length - 1;

  const isLetter = s => {
    if (!s) return false;
    const a = s.charCodeAt(0);
    return a >= 65 && a <= 90 || a >= 97 && a <= 122;
  }

  while (start <= end) {
    if (isLetter(words[start]) && isLetter(words[end])) {
      let temp = words[start];
      words[start] = words[end];
      words[end] = temp;
      start++;
      end--;
    }

    if (!isLetter(words[start])) {
      start++;
    }

    if (!isLetter(words[end])) {
      end--;
    }
  }

  return words.join('');
};

console.log(reverseOnlyLetters("7_28]"))