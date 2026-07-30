// LC 117 — Populating Next Right Pointers in Each Node II.
// Works on any binary tree (not necessarily perfect). Populate each node's `next`
// pointer to its immediate right neighbor on the same level, or null if there isn't
// one, using O(1) extra space (besides recursion, if any).
export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val: number = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

export function connect(root: Node | null): Node | null {
  throw new Error("not implemented");
}
