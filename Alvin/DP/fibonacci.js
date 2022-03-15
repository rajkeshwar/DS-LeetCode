
/**
 * Recursion with memoization
 */
function fib(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num <= 2) return 1;
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}

function fibTabulation(num) {
  const table = Array(num + 1).fill(0);

  table[1] = 1;

  for (let n = 2; n <= num; n++) {
    table[n] = table[n - 1] + table[n - 2];
  }

  return table[num];
}


console.log(fib(6));  // 8
console.log(fib(7));  // 13
console.log(fib(8));  // 21
console.log(fib(50)); // 12586269025

console.log('================ tabulation =============')
console.log(fibTabulation(6));  // 8
console.log(fibTabulation(7));  // 13
console.log(fibTabulation(8));  // 21
console.log(fibTabulation(50)); // 12586269025

