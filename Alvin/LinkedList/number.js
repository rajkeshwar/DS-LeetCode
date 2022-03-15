

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let number = 1; number <= 100, 000; number++) {
    if (A.indexOf(number) === -1) {
      return number;
    }
  }
}


const input = [1, 3, 6, 4, 1, 2];

console.log(solution(input))