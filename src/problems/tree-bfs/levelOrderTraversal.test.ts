import { describe, it, expect } from "vitest";
import { levelOrder, TreeNode } from "./levelOrderTraversal";

describe("levelOrder", () => {
  it("groups nodes by depth, left to right", () => {
    const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it("returns an empty array for an empty tree", () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it("handles a single node", () => {
    expect(levelOrder(new TreeNode(5))).toEqual([[5]]);
  });

  it("handles a left-skewed tree", () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });
});
