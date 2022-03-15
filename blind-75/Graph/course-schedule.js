var canFinish = function (numCourses, prerequisites) {
  // Create empty map with course index and empty list
  const courseMap = {};
  for (let i = 0; i < numCourses; i++) {
    courseMap[i] = [];
  }

  // Prepare adjacency-list with course index and prerequisites
  for (let [crs, pre] of prerequisites) {
    courseMap[crs].push(pre);
  }

  const visitedSet = new Set();

  function dfs(crs) {
    if (visitedSet.has(crs)) return false;
    if (courseMap[crs] === []) return true;

    visitedSet.add(crs);

    for (let pre of courseMap[crs]) {
      if (!dfs(pre)) return false;
    }

    visitedSet.delete(crs);
    courseMap[crs] = [];

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};
