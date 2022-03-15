
/**
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
 * return the minimum number of conference rooms required.
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  let roomsCount = 1;
  let prevEnds = [ intervals[0][1] ];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const prevEnd = Math.min(...prevEnds);

    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      roomsCount += 1;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return roomsCount;
};

const intervals = [[2, 15], [36, 45], [9, 29], [16, 23], [4, 9]];
const result = minMeetingRooms(intervals);
console.log(result)