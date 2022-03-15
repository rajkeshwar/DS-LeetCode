var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;

  intervals.sort((a, b) => a[0] - b[0]);

  let canAttend = true;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      canAttend = false;
      break;
    }
  }

  return canAttend;
};

const input = [[0,30],[5,10],[15,20]];
const input2 = intervals = [[7,10],[2,4]];

console.log(canAttendMeetings(input)) // false
console.log(canAttendMeetings(input2))