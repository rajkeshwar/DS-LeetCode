function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const input = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

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

console.log(buildGraph(input));

var cloneGraph = function (node) {
  return dfs(node);
};

function dfs(node, memo = {}) {
  if (node === null) return node;
  if (node.val in memo) return memo[node.val];

  const cloneNode = new Node(node.val);

  memo[node.val] = cloneNode;

  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(dfs(neighbor, memo));
  }

  return cloneNode;
}
