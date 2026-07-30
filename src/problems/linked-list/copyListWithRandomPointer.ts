// LC 138 — Copy List with Random Pointer.
// Each node has a `next` pointer and a `random` pointer that can point to any node
// in the list or be null. Return a deep copy of the list (independent nodes).
export class RandomNode {
  val: number;
  next: RandomNode | null;
  random: RandomNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

export function copyRandomList(head: RandomNode | null): RandomNode | null {
  throw new Error("not implemented");
}
