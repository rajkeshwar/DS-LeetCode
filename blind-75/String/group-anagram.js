

function groupAnagrams(strs) {
  const anagramMap = {};

  for (let word of strs) {
    const sortedWord = word.split('').sort().join('');

    if (!(sortedWord in anagramMap)) {
      anagramMap[sortedWord] = []
    }

    anagramMap[sortedWord].push(word);
  }

  return Object.values(anagramMap);
}