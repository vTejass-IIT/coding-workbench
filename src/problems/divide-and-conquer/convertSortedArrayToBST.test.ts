import { describe, it, expect } from "vitest";
import { sortedArrayToBST } from "./convertSortedArrayToBST";
import { TreeNode } from "../binary-tree-general/treeNode";

function height(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}

function inorder(root: TreeNode | null, out: number[] = []): number[] {
  if (!root) return out;
  inorder(root.left, out);
  out.push(root.val);
  inorder(root.right, out);
  return out;
}

describe("sortedArrayToBST", () => {
  it("produces a height-balanced tree containing every value in order", () => {
    const nums = [-10, -3, 0, 5, 9];
    const root = sortedArrayToBST(nums);
    expect(isBalanced(root)).toBe(true);
    expect(inorder(root)).toEqual(nums);
  });

  it("handles a single element", () => {
    const root = sortedArrayToBST([1]);
    expect(root!.val).toBe(1);
    expect(root!.left).toBeNull();
    expect(root!.right).toBeNull();
  });

  it("handles an empty array", () => {
    expect(sortedArrayToBST([])).toBeNull();
  });
});
