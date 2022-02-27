
/**
 * hasPath recursive
 */

function hasPathRecursive(graph, src, dst) {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst)) {
      return true;
    }
  }
  return true;
}

/**
 * hasPath iterative
 */

function hasPathIterative(graph, src, dst) {

  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}