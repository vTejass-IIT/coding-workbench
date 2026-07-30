// Given the root of a binary tree, return its level-order traversal as a list of lists
// (one inner list per depth, left to right).
// Input: tree rooted at 3, children 9 and 20; 20 has children 15 and 7
// Output: [[3],[9,20],[15,7]]
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function levelOrder(root: TreeNode | null): number[][] {
  throw new Error("not implemented");
}
