var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const output = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const lastEnd = output[output.length - 1][1];
    if (lastEnd >= start) {
      output[output.length - 1][1] = Math.max(lastEnd, end);
    } else {
      output.push([start, end]);
    }
  }

  return output;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output : [[1,6],[8,10],[15,18]]

console.log(merge(intervals))