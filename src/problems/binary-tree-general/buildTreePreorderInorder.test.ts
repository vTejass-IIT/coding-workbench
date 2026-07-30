import { describe, it, expect } from "vitest";
import { buildTree } from "./buildTreePreorderInorder";
import { treeToArray } from "./treeNode";

describe("buildTree (preorder + inorder)", () => {
  it("reconstructs a balanced tree", () => {
    const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
    expect(treeToArray(root)).toEqual([3, 9, 20, null, null, 15, 7]);
  });

  it("reconstructs a single node", () => {
    expect(treeToArray(buildTree([1], [1]))).toEqual([1]);
  });

  it("reconstructs a left-skewed tree", () => {
    expect(treeToArray(buildTree([3, 2, 1], [1, 2, 3]))).toEqual([3, 2, null, 1]);
  });
});
