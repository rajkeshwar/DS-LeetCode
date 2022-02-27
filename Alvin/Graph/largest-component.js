
function largestComponent(graph) {
  const visited = new Set();
  let largest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > largest) largest = size;
  }
  return largest;
}

function exploreSize(graph, current, visited) {
  if (visited.has(current)) return 0;

  visited.add(current);

  let size = 1;

  for (let neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}

const graph = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}

console.log(largestComponent(graph));