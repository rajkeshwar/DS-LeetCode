

var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) return true;

  intervals.sort((a, b) => a[0] - b[0])

  let canAttend = true;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (prevEnd <= start) {
      prevEnd = end;
    } else {
      canAttend = false;
      break;
    }
  }

  return canAttend;
};