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
  if (root === null) return [];

  const result: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const currentLevel: number[] = [];
    const nextQueue: TreeNode[] = [];

    for (const node of queue) {
      currentLevel.push(node.val);
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    result.push(currentLevel);
    queue = nextQueue;
  }

  return result;
}
