


/**
 * input = ['star', 'rats', 'car', 'arc', 'arts', 'starts'];
 * output = [ [ 'star', 'rats', 'arts' ], [ 'car', 'arc' ], [ 'starts' ] ]
 */


function anagramList(wordList) {
  if (!wordList) return null;
  const output = {};

  for (let word of wordList) {
    const sortedKey = word.split('').sort().join('');
    if (!(sortedKey in output)) {
      output[sortedKey] = []
    }
    output[sortedKey].push(word);
  }

  return Object.values(output);
}

const input = ['star', 'rats', 'car', 'arc', 'arts', 'starts'];

console.log(anagramList(input));