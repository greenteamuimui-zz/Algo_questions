var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null;
  }
  let slow_pointer = head
  let fast_pointer = head.next
  while(fast_pointer !== slow_pointer) {
    slow_pointer = slow_pointer.next
    if (fast_pointer.next === null || fast_pointer.next.next === null) {
      return null;
    }
    fast_pointer = fast_pointer.next.next
  }
  
  fast_pointer = head;
  slow_pointer = slow_pointer.next;
  while (slow_pointer !== fast_pointer) {
    slow_pointer = slow_pointer.next;
    fast_pointer = fast_pointer.next;
  }
  return slow_pointer;
};