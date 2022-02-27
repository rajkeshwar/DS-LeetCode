
/**
 * bestSum recursion with memoization
 */
function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let minCombination = null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = bestSum(reminder, numbers, memo);

    if (reminderResult !== null) {
      const combination = [...reminderResult, num];
      if (minCombination === null || combination.length < minCombination.length) {
        memo[targetSum] = combination;
        minCombination = combination;
      }
    }
  }

  memo[targetSum] = minCombination;
  return minCombination;
}


console.log(bestSum(7, [2, 3]));          // [ 3, 2, 2 ]
console.log(bestSum(8, [2, 3, 5]));       // [ 5, 3 ]
console.log(bestSum(8, [1, 4, 5]));       // [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // [ 25, 25, 25, 25 ]