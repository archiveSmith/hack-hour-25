/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let i = 0, j=0, current = head;
  for (current = head; current.next !== null;i++) {current = current.next}
  i += 1
  if (k > i || k < 1) return undefined
  for (j = 0, current = head; j < (i - k); j++) {current = current.next}
  return current.value
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
