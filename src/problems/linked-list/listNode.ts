// Shared singly-linked-list node + array<->list helpers used by the Linked List problems below.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function arrayToList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;
  for (const v of values) {
    const node = new ListNode(v);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail!.next = node;
      tail = node;
    }
  }
  return head;
}

export function listToArray(head: ListNode | null): number[] {
  const out: number[] = [];
  let cur = head;
  while (cur) {
    out.push(cur.val);
    cur = cur.next;
  }
  return out;
}
