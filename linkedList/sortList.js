/*
Sort List: https://leetcode.com/problems/sort-list/

Given the head of a linked list, return the list after sorting it in ascending order.
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

# Example 1:
Input: head = [4,2,1,3]
Output: [1,2,3,4]

# Example 2:
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]

# Example 3:
Input: head = []
Output: []

*/
const mergeSort = (a, b) => {
  const sortedList = new ListNode();
  let current = sortedList;
  while (a !== null && b !== null) {
    if (a.val > b.val) {
      current.next = b;
      b = b.next;
    } else {
      current.next = a;
      a = a.next;
    }
    current = current.next;
  }
  while (a !== null) {
    current.next = a;
    a = a.next;
    current = current.next;
  }
  while (b !== null) {
    current.next = b;
    b = b.next;
    current = current.next;
  }
  return sortedList.next;
};

const sortList = (head) => {
  if (head === null || head.next === null) return head;
  let [slow, temp, fast] = [head, head, head];
  while (fast !== null && fast.next !== null) {
    [temp, slow, fast] = [slow, slow.next, fast.next.next];
  }
  temp.next = null;
  return mergeSort(sortList(head), sortList(slow));
};
