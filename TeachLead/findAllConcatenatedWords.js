
function findAllConcatenatedWords(words) {
  const wordsSet = new Set(words);
  const cache = {}

  for (let word of words) {
    if (_canForm(wordsSet, word, cache)) {
      return word;
    }
  }
  return 'Cannot form'
}

function _canForm(wordsSet, word, cache) {
  if (word in cache) {
    return cache[word]
  }
  for (let i = 1; i < word.length; i++) {
    let prefix = word.slice(0, i)
    let suffix = word.slice(i)

    if (wordsSet.has(prefix)) {
      if (wordsSet.has(suffix) || _canForm(wordsSet, suffix, cache)) {
        cache[word] = true
        return true;
      }
    }
  }

  cache[word] = false
  return false;
}

let input = ['cat', 'cats', 'dog', 'catsdog']
const ret = findAllConcatenatedWords(input)
console.log(ret)