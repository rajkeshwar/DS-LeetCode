/**
 * countConstruct recursion with memoization
 */

function countConstruct(target, wordBank, memo={}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;

  let countWays = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      countWays += countConstruct(suffix, wordBank, memo);
    }
  }

  memo[target] = countWays;
  return countWays;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));                  // true
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));   // false
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [  // false
  'e',
  'ee',
  'eeee',
  'eeeeee',
  'eeeeeeee',
  'eeeeeeeeee',
  'eeeeeeeeeeee',
  'eeeeeeeeeeeeee'
]));