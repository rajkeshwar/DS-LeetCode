
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

// const adjecencyList = {
//   i: [j, k],
//   j: [i],
//   k: [i, m, l],
//   l: [k],
//   m: [k],
//   o: [n],
//   n: [o]
// }

function undirectedPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  return hasPathRecursive(graph, nodeA, nodeB, new Set());
}

function hasPathRecursive(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return true;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
}


function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log('hasPath: ', undirectedPath(edges, 'j', 'm'));