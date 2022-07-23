var no_of_chars = 256;

// Function to find smallest
// window containing
// all characters of 'pat'
function findSubString(str, pat) {

  if (str.length < pat.length) return '';

  const haveMap = {}, needMap = {};

  for (let c of pat.split('')) {
    needMap[c] = (needMap[c] || 0) + 1
  }

  var l = 0, r = 0, startIndex = -1, resLen = Number.MAX_VALUE;

  // Start traversing the string
  // Count of characters
  var count = 0;

  while (r < str.length) {

    let endChar = str.charAt(r++);
    // Count occurrence of characters
    // of string
    // hash_str[str.charAt(r).charCodeAt(0)]++;
    haveMap[endChar] = (haveMap[endChar] || 0) + 1

    // If string's char matches
    // with pattern's char
    // then increment count
    if (haveMap[endChar] <= needMap[endChar]) {
      count++;
    }

    // If all the characters are matched
    if (count == pat.length) {

      // Try to minimize the window
      while (
        haveMap[str.charAt(l)] > needMap[str.charAt(l)] 
        || needMap[str.charAt(l)] == 0) {

        if (haveMap[str.charAt(l)] > needMap[str.charAt(l)]) {
          haveMap[str.charAt(l)]--;
        }
        l++;
      }

      if (resLen > r - l + 1) {
        resLen = r - l + 1;
        startIndex = l;
      }
    }
  }

  // If no window found
  if (startIndex == -1) return '';

  // Return substring starting
  // from startIndex
  // and length resLen
  return str.substring(startIndex, startIndex + resLen);
}

const res = findSubString('ADOBECODEBANC', 'ABC')
console.log(res)