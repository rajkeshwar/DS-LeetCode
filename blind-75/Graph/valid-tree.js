var validTree = function (n, edges) {
  if (edges.length === 0 && n === 1) return true;
  if (edges.length === 0 && n > 1) return false;

  function buildGraph(edges) {
    const graph = {}
    for (let [a, b] of edges) {
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  }

  const graph = buildGraph(edges);

  const visited = new Set();

  function dfs(node, prev) {
    if (visited.has(node)) return false;

    visited.add(node);

    for (neighbor of graph[String(node)]) {
      if (neighbor === prev) continue;
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  }

  return dfs(edges[0][0], -1) && n === visited.size;
};


const ret = validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])
console.log('ret   ', ret)