var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) return 0;

  const start = intervals.map(t => t[0]).sort((a, b) => a - b);
  const end = intervals.map(t => t[1]).sort((a, b) => a - b);

  let startIndex = endIndex = 0;
  let res = count = 0;

  while (startIndex < intervals.length) {
    if (start[startIndex] < end[endIndex]) {
      startIndex++;
      count++;
    } else {
      endIndex++;
      count--;
    }
    res = Math.max(res, count);
  }

  return res;
};

