// Shared binary tree node + LeetCode-style level-order array<->tree helpers.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// values uses `null` for missing children, LeetCode level-order style,
// e.g. [3,9,20,null,null,15,7].
export function arrayToTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;
  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;
    if (i < values.length) {
      const leftVal = values[i++];
      if (leftVal !== null) {
        node.left = new TreeNode(leftVal);
        queue.push(node.left);
      }
    }
    if (i < values.length) {
      const rightVal = values[i++];
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
    }
  }
  return root;
}

export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];
  const out: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node === null) {
      out.push(null);
    } else {
      out.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  while (out.length > 0 && out[out.length - 1] === null) out.pop();
  return out;
}
