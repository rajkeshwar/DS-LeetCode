
/**
 * Given an array of intervals intervals where intervals[i] = [starti, endi], 
 * return the minimum number of intervals you need to remove to make the 
 * rest of the intervals non-overlapping.
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      count += 1;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return count;
};


const intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output = 1 ie [1,3]

const result = eraseOverlapIntervals(intervals);
console.log(result)