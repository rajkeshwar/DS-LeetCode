

/**
 * 23. Merge k Sorted Lists
 */
var mergeKLists = function (lists) {
  if (!lists || (lists && lists.length === 0)) return null;

  while (lists.length > 1) {
    let results = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      results.push(mergeList(l1, l2))
    }
    lists = results;
  }

  return lists[0];
};

function mergeList(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1 !== null) tail.next = l1;
  if (l2 !== null) tail.next = l2;

  return dummy.next;
}