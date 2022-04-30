var countComponents = function(n, edges) {
  const visited = new Set();
  let count = 0;
  
  const graph = buildGraph(edges);
  
  function buildGraph(edges) {
      const graph = {}
      for (let [a, b] of edges) {
          if (!(a in graph)) graph[a] = []
          if (!(b in graph)) graph[b] = []
          graph[a].push(b)
          graph[b].push(a)
      }
      return graph;
  }
  
  function explore(node) {
      if (visited.has(String(node))) return false;
      
      visited.add(String(node));
      
      for(let neighbor of graph[String(node)]) {
          if (!explore(node)) return false;
      }
      
      return true;
  }
  
  for (let node in graph) {
      if(explore(node)) {
          count += 1
      }
  }
  
  return count;
};