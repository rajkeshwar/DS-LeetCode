

/**
 * dfs iterative
 */
console.log('=============== dfsIterative =============== ');

function dfsIterative(graph, source) {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

dfsIterative(graph, 'a'); // abdfce


/**
 * dfsRecursive
 */

console.log('=============== dfsRecursive =============== ');
function dfsRecursive(graph, source) {
  console.log(source);

  for (let neighbor of graph[source]) {
    dfsIterative(neighbor);
  }
}

dfsIterative(graph, 'a');