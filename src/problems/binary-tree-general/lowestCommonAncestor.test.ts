import { describe, it, expect } from "vitest";
import { lowestCommonAncestor } from "./lowestCommonAncestor";
import { TreeNode } from "./treeNode";

describe("lowestCommonAncestor", () => {
  it("finds the LCA of two nodes in different subtrees", () => {
    const five = new TreeNode(5);
    const one = new TreeNode(1);
    const root = new TreeNode(3, five, one);
    five.left = new TreeNode(6);
    five.right = new TreeNode(2);
    const four = new TreeNode(4);
    five.right.left = new TreeNode(7);
    five.right.right = four;
    expect(lowestCommonAncestor(root, five, one)).toBe(root);
    expect(lowestCommonAncestor(root, five, four)).toBe(five);
  });

  it("treats a node as its own ancestor when one is a descendant of the other", () => {
    const child = new TreeNode(2);
    const root = new TreeNode(1, child, null);
    expect(lowestCommonAncestor(root, root, child)).toBe(root);
  });

  it("handles a two-node tree", () => {
    const child = new TreeNode(2);
    const root = new TreeNode(1, child, null);
    expect(lowestCommonAncestor(root, child, child)).toBe(child);
  });
});
