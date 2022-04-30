

function solution(A, B, N) {
  // write your code in JavaScript (Node.js 8.9.4)

  const graph = {}

  for (let i = 0; i < A.length; i++) {
    graph[A[i]] = (graph[A[i]] || 0) + 1
    graph[B[i]] = (graph[B[i]] || 0) + 1
  }

  let roadCount = 0;

  for (let i = 0; i < N; i++) {
    const countA = graph[A[Number(i)]];
    const countB = graph[B[Number(i)]];
    if (!countA || !countB) continue;
    console.log('countA : ', countA)
    console.log('countB : ', countB)
    roadCount = Math.max(roadCount, countA + countB - 1)
    console.log('roadCount : ', roadCount)
  }

  return roadCount;
}

const ret = solution([1, 2, 3, 3], [2, 3, 1, 4], 4);
const ret2 = solution([1, 2, 4, 5], [2, 3, 5, 6], 6);

console.log(ret2)